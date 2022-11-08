const router = require('express').Router();

//TODO: this makes the api file to be seen and made into main route
const apiRoutes = require('./api');

//TODO: this makes the frontEndRoute file to be seen and made into main route
const frontEndRoutes = require("./frontEndRoutes")

// TODO: anything tagged with apiRoutes makes /api the path
router.use('/api', apiRoutes);

// TODO: this makes the router just the base localhost:3001/
router.use(frontEndRoutes);

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;