const router = require('express').Router();
const { Campaign } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const campaignData = await Campaign.findAll();
    res.status(200).json(campaignData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const campaignData = await Campaign.findByPk(req.params.id, {

    });

    if (!campaignData) {
      res.status(404).json({ message: 'No Campaign found with that id!' });
      return;
    }

    res.status(200).json(campaignData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// TODO: need to fill out according to Campaign parameters
router.post('/', async (req, res) => {
  try {
    const campaignData = await Campaign.create({
      name: req.body.name,
      UserId: req.session.user_id,
    });

    const newCampaign = await Campaign.findOne({
      where: {
        name: req.body.name,
      }
    });

    req.session.save(() => {
      req.session.campaign_id = newCampaign.id
      res.status(200).json(campaignData);
    })
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// TODO: need to fill out according to Campaign parameters
router.put('/:id', (req, res) => {
    Campaign.update(
      {
        name: req.body.name,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    )
      .then((updatedCampaign) => {
        res.json(updatedCampaign);
      })
      .catch((err) => res.json(err));
});

router.delete('/:id', (req, res) => {
  Campaign.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((deletedCampaign) => {
      res.json(deletedCampaign);
    })
    .catch((err) => res.json(err));
});

module.exports = router;