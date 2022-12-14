const express = require("express");
const router = express.Router();
const {
  User,
  Campaign,
  Player,
  AddedMonster,
  Monster,
  Encounter,
  Effect,
} = require("../models");

// TODO: route is localhost:3001
router.get("/", (req, res) => {
  if (req.session.logged_in) {
    return res.redirect("/dashboard");
  }
  res.render("login", {
    logged_in: req.session.logged_in,
  });
});

router.get("/signup", (req, res) => {
  res.render("signup", {});
});

// dashboard page
router.get("/dashboard", async (req, res) => {
  if (!req.session.logged_in) {
    return res.redirect("/");
  }
  try {
    const usersCampaign = await Campaign.findAll({
      where: {
        UserId: req.session.user_id,
      },
    });

    const frontCampaign = usersCampaign.map((campaign) =>
      campaign.get({ plain: true })
    );

    res.render("dashboard", {
      campaigns: frontCampaign,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// new Campaign page
router.get("/newCampaign", async (req, res) => {
  if (!req.session.logged_in) {
    return res.redirect("/");
  }
  try {
    res.render("newCampaign", {
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err, "Don't give up, you can do it!");
  }
});

// new encounter page
router.get("/newEncounter", async (req, res) => {
  if (!req.session.logged_in) {
    return res.redirect("/");
  }
  try {
    const monsters = await Monster.findAll({
      where: {
        level: 0,
        isElite: false,
      },
    });

    const availMonsters = monsters.map((monster) =>
      monster.get({ plain: true })
    );
    res.render("newEncounter", {
      monsters: availMonsters,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// current encounter page
router.get("/currentEncounter", async (req, res) => {
  if (!req.session.logged_in) {
    return res.redirect("/");
  }
  console.log(req.session);
  try {
    const campaignPlayers = await Player.findAll({
      where: {
        CampaignId: req.session.campaign_id,
      },
      include: [
        {
          model: Effect,
          attributes: ["name","image"],
          through: {
            attributes: [],
          },
        },
      ],
    });
    const campPlayers = campaignPlayers.map((player) =>
      player.get({ plain: true })
    );
    const specificEncounter = await Encounter.findByPk(req.session.encounter_id);
    const encounterMonsters = await specificEncounter.getAddedMonsters({
      include: [
        {
          model: Effect,
          attributes: ["name","image"],
          through: {
            attributes: [],
          },
        },
      ],
    });

    const encMonsters = encounterMonsters.map((monster) =>
      monster.get({ plain: true })
    );

    res.render("currentEncounter", {
      players: campPlayers,
      monsters: encMonsters,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json({msg: `The current encounter front end route is not working appropriately.`});
  }
});

//this allows for us to see the person's id with the session in use. This isnt really a front end route because it doesnt deliver any viewable data and should live elsewhere. -MD
router.get("/sessions", (req, res) => {
  res.json(req.session);
});

module.exports = router;
