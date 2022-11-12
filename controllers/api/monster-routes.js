const router = require('express').Router();
const { Monster, Effect, Encounter } = require('../../models');

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
  try{
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

router.post('/:id/encounter', async (req,res)=> {
  try {
    const numAdding = req.body.numToAdd;
    console.log(numAdding + "====================================")
    console.log(req.session.encounter_id)
    for (let i = 0; i < numAdding; i++) {
      const encounterMonster = await Monster.findByPk(req.params.id);
      await encounterMonster.addEncounter(req.session.encounter_id);
      console.log(encounterMonster);
    }
    res.status(200);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
})

module.exports = router;