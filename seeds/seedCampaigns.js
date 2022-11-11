const { Campaign } = require('../models');

const campaigns = [
    {
        name: "LionHeartLove",
        UserId: 1,
    },
    {
        name: "Jaws of The Lion",
        UserId: 2,
    },
]

const seedCampaigns = () => Campaign.bulkCreate(campaigns);

module.exports = seedCampaigns;