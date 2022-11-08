const router = require('express').Router();
const { Player } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const playerData = await Player.findAll({
      // add separate modals connected to Player if needed
      // include: [{ model:  }],
    });
    res.status(200).json(playerData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const playerData = await Player.findByPk(req.params.id, {

    });

    if (!playerData) {
      res.status(404).json({ message: 'No player found with that id!' });
      return;
    }

    res.status(200).json(playerData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// TODO: need to fill out according to Player parameters
router.post('/', async (req, res) => {
  try {
    const playerData = await Player.create({
      name: req.body.name,
      level: req.body.level,
      health: req.body.health,
      experience: req.body.experience,
    });
    res.status(200).json(playerData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// TODO: need to fill out according to Player parameters
router.put('/:id', (req, res) => {
    Player.update(
      {
        name: req.body.name,
        level: req.body.level,
        health: req.body.health,
        experience: req.body.experience,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    )
      .then((updatedPlayer) => {
        res.json(updatedPlayer);
      })
      .catch((err) => res.json(err));
});

router.delete('/:id', (req, res) => {
  Player.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((deletedPlayer) => {
      res.json(deletedPlayer);
    })
    .catch((err) => res.json(err));
});

module.exports = router;