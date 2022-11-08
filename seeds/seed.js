const sequelize = require('../config/connection');
const seedUsers = require('./seedUsers')
const seedCampaigns = require('./seedCampaigns');
const seedEncounters = require('./seedEncounters');
const seedEffects = require('./seedEffects');
const seedMonsters = require('./seedMonsters');
const seedPlayers = require('./seedPlayers');
const { Monster } = require('../models');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();
  await seedCampaigns();
  await seedPlayers();
  await seedEncounters();
  await seedMonsters();
  await seedEffects();

  const me = await Monster.findByPk(1);
  await me.addEffect(1);
  process.exit(0);
};

seedAll();