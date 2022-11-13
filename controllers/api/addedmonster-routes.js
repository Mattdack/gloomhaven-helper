const router = require('express').Router();
const { AddedMonster, Effect, Encounter, Campaign} = require('../../models');

router.get('/', async (req, res) => {
  try {
    const AddedMonsterData = await AddedMonster.findAll({
      // add separate modals connected to AddedMonster if needed
      // include: [{ model:  }],
    });
    res.status(200).json(AddedMonsterData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const AddedMonsterData = await AddedMonster.findByPk(req.params.id, {

    });

    if (!AddedMonsterData) {
      res.status(404).json({ message: 'No AddedMonster found with that id!' });
      return;
    }

    res.status(200).json(AddedMonsterData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    console.log(req.body)
    const AddedMonsterData = await AddedMonster.create({
      name: req.body.name,
      level: req.body.level,
      special: req.body.special,
      health: req.body.health,
      move: req.body.move,
      attack: req.body.attack,
      isElite: req.body.isElite,
    });
    res.status(200).json(AddedMonsterData);
  } catch (err) {
    res.status(400).json(err);
  }
});



  // TODO: need to fill out according to AddedMonster parameters
  router.put('/:id', (req, res) => {
    AddedMonster.update(
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
      .then((updatedAddedMonster) => {
        res.json(updatedAddedMonster);
      })
      .catch((err) => res.json(err));
  });

  router.delete('/:id', (req, res) => {
    AddedMonster.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then((deletedAddedMonster) => {
        res.json(deletedAddedMonster);
      })
      .catch((err) => res.json(err));
  });

  router.post(`/:id/effect`, async (req, res) => {
    try {
      const targetAddedMonster = await AddedMonster.findByPk(req.params.id);
      await targetAddedMonster.addEffect(req.body.effect);

      const updatedTargetAddedMonster = await AddedMonster.findOne({
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
      res.status(200).json(updatedTargetAddedMonster);
    } catch (err) {
      res.status(500).json(err);
    }
  });

// router.post('/:id/encounter', async (req,res)=> {
//   try {
//     const numAdding = req.body.numToAdd;
//     for (let i = 0; i < numAdding; i++) {
//       const encounterAddedMonster = await AddedMonster.findByPk(req.params.id);
//       await encounterAddedMonster.addEncounter(req.session.encounter_id);
//       console.log(encounterAddedMonster);
//     }
//     res.status(200);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// })

  module.exports = router;