const { Encounter } = require('../models');

const encounters = [
    {
        number: 1,
        CampaignId: 1,
    },
]

const seedEncounters = () => Encounter.bulkCreate(encounters);

module.exports = seedEncounters;