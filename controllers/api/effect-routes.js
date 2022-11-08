const router = require('express').Router();
const { Effect } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const effectData = await Effect.findAll({
      // add separate modals connected to Effect if needed
      // include: [{ model:  }],
    });
    res.status(200).json(effectData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const effectData = await Effect.findByPk(req.params.id, {

    });

    if (!effectData) {
      res.status(404).json({ message: 'No Effect found with that id!' });
      return;
    }

    res.status(200).json(effectData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// TODO: need to fill out according to Effect parameters
router.post('/', async (req, res) => {
  try {
    const effectData = await Effect.create({
      name: req.body.name,
      effects: req.body.effects,
    });
    res.status(200).json(effectData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// TODO: need to fill out according to Effect parameters
router.put('/:id', (req, res) => {
    Effect.update(
      {
        name: req.body.name,
        effects: req.body.effects,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    )
      .then((updatedEffect) => {
        res.json(updatedEffect);
      })
      .catch((err) => res.json(err));
});

router.delete('/:id', (req, res) => {
  Effect.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((deletedEffect) => {
      res.json(deletedEffect);
    })
    .catch((err) => res.json(err));
});

module.exports = router;