const router = require('express').Router();
const { Campaign, Player, Monster, Encounter } = require('../../models');

router.get('/'), async (req, res) => {
    try {
        const dbPlayerData = await Campaign.findAll({
            include: [
                {
                    model: Player,
                    attributes: ['playerName']
                }]
        });

        const dbMosnterData = await Encounter.findAll({
            include:[{
                model:Monster,
                attribute:["name"]
            }]
        })
        const newMosnterList = dbMonsterData.map((monsters)=>
        monsters.get({ plain: true}))

        const newPlayerList = dbPlayerData.map((characters) =>
        characters.get({ plain: true })
        );

        res.render('Home', {
                players:newPlayerList,
                monsters:newMosnterList,
                logged_in:req.session.logged_in
            
        })
    } catch (err) {
    res.status(400).json(err);
  }
}

module.exports = router;
