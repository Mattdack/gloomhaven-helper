const { Player } = require('../models');

const players = [
  {
    name: 'Red Guard',
    level: 1,
    health: 10,
    experience: 0,
  },
  {
    name: 'Demolitionist',
    level: 1,
    health: 8,
    experience: 0,
  },
  {
    name: 'Hatchet',
    level: 1,
    health: 8,
    experience: 0,
  },
  {
    name: 'Voidwarden',
    level: 1,
    health: 6,
    experience: 0,
  },
];

const seedPlayers = () => Player.bulkCreate(players);

module.exports = seedPlayers;
