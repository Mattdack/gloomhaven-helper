const router = require('express').Router();
const { Monster, Effect, Encounter, Campaign} = require('../../models');

router.get('/', async (req, res) => {
  try {
    const monsterData = await Monster.findAll({
      // add separate modals connected to Monster if needed
      // include: [{ model:  }],
    });
    res.status(200).json(monsterData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const monsterData = await Monster.findByPk(req.params.id, {

    });

    if (!monsterData) {
      res.status(404).json({ message: 'No Monster found with that id!' });
      return;
    }

    res.status(200).json(monsterData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    console.log(req.body)
    const monsterData = await Monster.create({
      name: req.body.name,
      level: req.body.level,
      special: req.body.special,
      health: req.body.health,
      move: req.body.move,
      attack: req.body.attack,
      isElite: req.body.isElite,
    });
    res.status(200).json(monsterData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get('/encountermonster', async (req, res) => {
  try {
    const monsterData = await EncounterMonster.findAll({
      // add separate modals connected to Monster if needed
      // include: [{ model:  }],
    });
    res.status(200).json(monsterData);
  } catch (err) {
    res.status(500).json(err);
  }
});
// ============will this work? we'll see
router.post("/EncounterMonster/:monsterId", (req, res) => {
  if (!req.session.loggedIn) {
    return res.status(401).json({ msg: "login first" })
  }
  Campaign.findByPk(req.session.campaignId).then(foundCamp => {
    foundCamp.addEncounterMonster(req.params.monsterId).then(usr => {
      console.log(usr);
      console.log("association added!")
    })
  })
});

  // TODO: need to fill out according to Monster parameters
  router.put('/:id', (req, res) => {
    Monster.update(
      {
        name: req.body.name,
        level: req.body.level,
        special: req.body.special,
        health: req.body.health,
        move: req.body.move,
        attack: req.body.attack,
        isElite: req.body.isElite,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    )
      .then((updatedMonster) => {
        res.json(updatedMonster);
      })
      .catch((err) => res.json(err));
  });

  router.delete('/:id', (req, res) => {
    Monster.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then((deletedMonster) => {
        res.json(deletedMonster);
      })
      .catch((err) => res.json(err));
  });

  router.post(`/:id/effect`, async (req, res) => {
    try {
      const targetMonster = await Monster.findByPk(req.params.id);
      await targetMonster.addEffect(req.body.effect);

      const updatedTargetMonster = await Monster.findOne({
        where: {
          id: req.params.id,
        },
        include: [{
          model: Effect,
          attributes: ["name"],
          through: {
            attributes: []
          }
        }],
      });
      res.status(200).json(updatedTargetMonster);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.post('/:id/encounter', async (req, res) => {
    try {
      const encounterMonster = await Monster.findByPk(req.params.id);
      // will need to change to 1 below to a specific encounter # based off of the logged in user/campaign
      await encounterMonster.addEncounter(1);
      const updatedEncounterMonster = await Monster.findOne({
        where: {
          id: req.params.id,
        },
        include: [{
          model: Encounter,
          attributes: ['number'],
          through: {
            attributes: []
          }
        }]
      })
      res.status(200).json(updatedEncounterMonster);
    } catch (err) {
      res.status(500).json(err);
    }
  })

  module.exports = router;