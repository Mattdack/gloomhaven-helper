const express = require("express");
const router = express.Router();
const { User, Campaign, Player, Monster, Encounter, Effect } = require("../models");

// TODO: route is localhost:3001
router.get("/login", (req, res) => {
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


router.get("/dashboard", async (req, res) => {
  try {

    const characters = await Player.findAll()
      
    const availPlayer = characters.map((player) =>
      player.get({ plain: true })
    );
    if (!req.session.logged_in) {
      return res.redirect("/login");
    }
    res.render("dashboard", {
      players: availPlayer,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});



// =====================
// router.get("/newEncounter", (req, res) => {
//   if (!req.session.logged_in) {
//     return res.redirect("/login");
//   }
//   res.render("newEncounter", {
//     logged_in: req.session.logged_in,
//   });
// });


// ========new encouter GET
router.get("/newEncounter", async (req, res) => {
  try {


    const monsters = await Monster.findAll()
      
    const availMonsters = monsters.map((monster) =>
      monster.get({ plain: true })
    );
    if (!req.session.logged_in) {
      return res.redirect("/login");
    }
    res.render("newEncounter", {
      monsters: availMonsters,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);

  }
});

// ===========================current encounter GET
router.get("/currentEncounter", async (req, res) => {
  try {
    const campaignPlayers = await Player.findAll({
      where: {
        CampaignID: 1,
      },
      include: [
        {
          model: Effect,
          attributes: ["name"],
          through: {
            attributes: [],
          },
        },
      ],
    });
    const campPlayers = campaignPlayers.map((player) =>
      player.get({ plain: true })
    );
    console.log(campPlayers);
    const specificEncounter = await Encounter.findByPk(1);
    const encounterMonsters = await specificEncounter.getMonsters(
      {
        include: [
          {
            model: Effect,
            attributes: ["name"],
            through: {
              attributes: [],
            },
          },
        ],
      }
    );

    const encMonsters = encounterMonsters.map((monster) =>
      monster.get({ plain: true })
    );
    if (!req.session.logged_in) {
      return res.redirect("/login");
    }
    res.render("currentEncounter", {
      players: campPlayers,
      monsters: encMonsters,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//this allows for us to see the person's id with the session in use
router.get("/sessions", (req, res) => {
  res.json(req.session);
});

module.exports = router;
