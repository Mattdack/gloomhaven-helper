const express = require('express');
const router = express.Router('./api');
const apiRoutes = require("./api");

router.use("/api", apiRoutes);

module.exports = router;