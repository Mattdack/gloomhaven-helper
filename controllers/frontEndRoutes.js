// TODO: anything in the res.render is referencing the name of the handlebar file

const express = require('express');
const router = express.Router();
const {Player} = require('../models');

// TODO: route is localhost:3001
router.get("/",(req,res)=>{
        // TODO: findall gets all Players and then parses them into passable data
        res.render("login",{
            //this is passing projects however the value has been changed to the format that handlebars likes
            // logged_in:req.session.logged_in
        })
    })

router.get("/home",(req,res)=>{
    // TODO: findall gets all Players and then parses them into passable data
    Player.findAll().then(players=>{
        const playersHbsData = players.map(project=>project.get({plain:true}))
        console.log(players);
        console.log("==============")
        console.log(playersHbsData)

        res.render("home",{
            //this is passing projects however the value has been changed to the format that handlebars likes
            players:playersHbsData,
            // logged_in:req.session.logged_in
        })
    })
})

module.exports = router;