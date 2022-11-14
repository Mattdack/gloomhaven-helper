const router = require('express').Router();
const { Campaign, User, Encounter } = require('../../models');

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
    const newCampaign = await Campaign.create({
      name: req.body.name,
      UserId: req.session.user_id,
    });
    console.log("LOOOOK RIGHT HEREE")
    console.log(newCampaign);
    const madeCampaign = await Campaign.findOne({
      where: {
        name: req.body.name,
      }
    });

    const newEncounter = await Encounter.create({
      CampaignId: madeCampaign.id,
    });

    console.log(newEncounter);
    const madeEncounter = await Encounter.findOne({
      where: {
        CampaignId: madeCampaign.id,
      }
    });

    req.session.save(() => {
      req.session.campaign_id = madeCampaign.id;
      req.session.encounter_id = madeEncounter.id;

      console.log(req.session);
      res.status(200).json({newCampaign, newEncounter});
    })
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// New route to update the campaign_id
router.post(`/:id`, async (req, res) => {
  console.log("storing campaign Id")
  try{
    const findCampaign = await Campaign.findOne({
      where: {
        id: req.params.id
      }
    });
    const newEncounter = await Encounter.create({
      CampaignId: findCampaign.id,
    });
    // const findEncounter = await Encounter.findOne({
    //   where: {
    //     CampaignId: findCampaign.id
    //   }
    // });

    req.session.save(() => {
      req.session.campaign_id = req.params.id;
      console.log("Campaign ID has been stored as" + req.params.id);
      console.log(req.session.campaign_id);
      req.session.encounter_id = newEncounter.id;
      console.log("Encounter ID has been stored as" + newEncounter.id);
      console.log(req.session.encounter_id);
      res.status(200).json({msg: "Campaign Id and Encounter Id have been updated"});
    });
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