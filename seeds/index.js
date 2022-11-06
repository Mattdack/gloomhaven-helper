const sequelize = require('../config/connection');
const seedEffects = require('./seedEffects');
const seedPaintings = require('./paintingData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedEffects();

  await seedPaintings();

  process.exit(0);
};

seedAll();
