const express = require('express');
const router = express.Router();

// Replace "xxxController with name of file"
const petsRoutes = require("./petsController");
const ownerRoutes = require('./ownersController');
const toyRoutes = require('./toysController')

// Replace pets & rename pet routes. Endpoint of this url is /api/pets
router.use("/pets", petsRoutes);
// Replace owners & rename owner routes. Endpoint of this url is /api/owners
router.use("/owners", ownerRoutes);
// Replace toys & rename toy routes. Endpoint of this url is /api/toys
router.use('/toys', toyRoutes)

module.exports = router;