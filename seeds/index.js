const sequelize = require('../config/connection');
const seedUsers = require('./seedUsers')
const seedCampaigns = require('./seedCampaigns');
const seedEncounters = require('./seedEncounters');
const seedEffects = require('./seedEffects');
const seedMonsters = require('./seedMonsters');
const seedPlayers = require('./seedPlayers');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();
  await seedCampaigns();
  await seedPlayers();
  await seedEncounters();
  await seedMonsters();
  await seedEffects();



  process.exit(0);
};

seedAll();
