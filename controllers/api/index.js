const router = require('express').Router();

// separate routes
const campaignRoutes = require('./campaign-routes');
const effectRoutes = require('./effect-routes');
const encounterRoutes = require('./encounter-routes');
const monsterRoutes = require('./addedmonster-routes');
const playerRoutes = require('./player-routes');
const userRoutes = require('./user-routes');
const addedmonsterRoutes = require('./addedmonster-routes')

// path used on routes made
router.use('/campaigns', campaignRoutes);
router.use('/effects', effectRoutes);
router.use('/encounters', encounterRoutes);
router.use(`/addedMonsters`, addedmonsterRoutes)
router.use('/monsters', monsterRoutes);
router.use('/players', playerRoutes);
router.use('/users', userRoutes);


module.exports = router;
