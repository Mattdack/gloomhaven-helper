const { Campaign } = require('../models');

const campaigns = [
    {
        name: "LionHeartLove",
        numPlayers: 4,
        UserId: 1,
    },
]

const seedCampaigns = () => Campaign.bulkCreate(campaigns);

module.exports = seedCampaigns;