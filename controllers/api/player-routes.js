const router = require('express').Router();
const { Player, Effect } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const playerData = await Player.findAll({
      // add separate modals connected to Player if needed
      include: [{
        model: Effect,
        attributes: ["name"],
        through: {
          attributes: []
        }
      }],
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

router.post('/', async (req, res) => {
  console.log("Making a new player");

  try {
    const playerData = await Player.create({
      playerName: req.body.name,
      playerLevel: req.body.level,
      playerHealth: req.body.health,
      experience: req.body.experience,
      CampaignId: req.session.campaign_id,
    });
    res.status(200).json(playerData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', (req, res) => {
    Player.update(
      {
        playerName: req.body.name,
        playerLevel: req.body.level,
        playerHealth: req.body.health,
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

router.post(`/:id/effect`, async (req, res) => {
  try{
    const targetPlayer = await Player.findByPk(req.params.id);
    await targetPlayer.addEffect(req.body.effect);

    const updatedTargetPlayer = await Player.findOne({
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
    res.status(200).json(updatedTargetPlayer);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;