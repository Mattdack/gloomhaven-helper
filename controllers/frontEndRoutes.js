const express = require('express');
const router = express.Router();
const {Campaign, Player, Monster, Encounter, Effect } = require('../models');

// TODO: route is localhost:3001
router.get("/login",(req,res)=>{
        if(req.session.logged_in){
            return res.redirect("/home")
        }
        res.render("login",{
            logged_in:req.session.logged_in
        })
})

router.get("/signup",(req,res)=>{
    res.render("signup",{
    })
})

router.get("/dashboard",(req,res)=>{
    if(!req.session.logged_in){
        return res.redirect("/login")
    }
    res.render("dashboard",{
        logged_in:req.session.logged_in
    })
})

router.get("/encounter",(req,res)=>{
    if(!req.session.logged_in){
        return res.redirect("/login")
    }
    res.render("encounter",{
        logged_in:req.session.logged_in
    })
})


router.get("/home",(req,res)=>{
    // TODO: findall gets all Players and then parses them into passable data
    Player.findAll({
        include: [{
            model: Effect,
            attributes: ['name'],
            through:{
                attributes:[],
            }
        }]
    }).then(players=>{
        const playersHbsData = players.map(project=>project.get({plain:true}))
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
// router.get('/home'), async (req, res) => {
//     try {
//         const dbPlayerData = await Campaign.findAll();

//         const dbMonsterData = await Encounter.findAll()

//         const newPlayerHbs = dbPlayerData.map((characters) =>
//         characters.get({ plain: true }));

//         const newMonsterHbs = dbMonsterData.map((monsters)=>
//         monsters.get({ plain: true}));


//         res.render('home', {
//                 players:newPlayerHbs,
//                 monsters:newMonsterHbs,
//                 // logged_in:req.session.logged_in
            
//         })
//     } catch (err) {
//     res.status(400).json(err);
//   }
// }

//this allows for us to see the person's id with the session in use 
router.get("/sessions",(req,res)=>{
    res.json(req.session)
})

module.exports = router;