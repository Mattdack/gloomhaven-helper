const { Encounter } = require('../models');

const encounters = [
    {
        CampaignId: 1,
    },
    {
        CampaignId: 1,
    },
]

const seedEncounters = () => Encounter.bulkCreate(encounters);

module.exports = seedEncounters;