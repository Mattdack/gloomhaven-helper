const { Player } = require('../models');

const players = [
  {
    playerName: 'Red Guard',
    playerLevel: 1,
    playerHealth: 10,
    experience: 0
  },
  {
    playerName: 'Demolitionist',
    playerLevel: 1,
    playerHealth: 8,
    experience: 0
  },
  {
    playerName: 'Hatchet',
    playerLevel: 1,
    playerHealth: 8,
    experience: 0
  },
  {
    playerName: 'Voidwarden',
    playerLevel: 1,
    playerHealth: 6,
    experience: 0
  }
];

const seedPlayers = () => Player.bulkCreate(players);

module.exports = seedPlayers;
