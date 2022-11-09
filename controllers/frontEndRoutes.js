const express = require('express');
const router = express.Router();
const {Campaign, Player, Monster, Encounter } = require('../models');

// TODO: route is localhost:3001
router.get("/login",(req,res)=>{
        if(req.session.logged_in){
            // return res.redirect("/home")
        }
        res.render("login",{
            logged_in:req.session.logged_in
        })
})

router.get("/signup",(req,res)=>{
    res.render("signup",{
    })
})

router.get("/home",(req,res)=>{
    if(!req.session.logged_in){
        return res.redirect("/login")
    }
    Player.findAll().then(players=>{
        const playersHbsData = players.map(player=>player.get({plain:true}))
        console.log(players);
        console.log("==============")
        console.log(playersHbsData)



        
        res.render("home",{
            players:playersHbsData,
            logged_in:req.session.logged_in
        })
    })
})

// only info for characters turn order
router.get('/home'), async (req, res) => {
    try {
        const dbPlayerData = await Campaign.findAll();

        const dbMonsterData = await Encounter.findAll()

        const newPlayerHbs = dbPlayerData.map((characters) =>
        characters.get({ plain: true }));

        const newMonsterHbs = dbMonsterData.map((monsters)=>
        monsters.get({ plain: true}));


        res.render('home', {
                players:newPlayerHbs,
                monsters:newMonsterHbs,
                // logged_in:req.session.logged_in
            
        })
    } catch (err) {
    res.status(400).json(err);
  }
}

//TODO: this allows for us to see the person's id with the session in use 
router.get("/sessions",(req,res)=>{
    res.json(req.session)
})

module.exports = router;