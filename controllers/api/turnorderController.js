const router = require('express').Router();
const { Campaign, Player, Monster } = require('../../models');

router.get('/'), async (req, res) => {
    try {
        const dbCharacterData = await Campaign.findAll({
            include: [
                {
                    model: Player,
                    attributes: ['playerName']
                },
                {
                    model: Monster,
                    attributes: ["name"]
                }
            ]
        });

        const newList = dbCharacterData.map((characters) =>
        characters.get({ plain: true })
        );

        res.render('Turn Order', {
            newList,
        })
    } catch (err) {
    res.status(400).json(err);
  }
}

// router.post('/', async (req, res) => {
//   try {
//     const newCampaignList = await Campaign.create({
//       ...req.body,
//       user_id: req.session.user_id,
//     });

//     res.status(200).json(newCampaign);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

// router.delete('/', async (req, res) => {
//   try {
//     const campaignData = await .destroy({
//       where: {
//         id: req.params.id,
//         user_id: req.session.user_id,
//       },
//     });

//     if (!campaignData) {
//       res.status(404).json({ message: 'No campaign found with this id!' });
//       return;
//     }

//     res.status(200).json(campaignData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;
