const { Monster } = require('../models');

const monsterStats = [
  {
    name: 'Living Corpse',
    level: 0,
    special: null,
    health: 5,
    move: 1,
    attack: 3,
    isElite: false
  },
  {
    name: 'Stone Golem',
    level: 0,
    special: null,
    health: 10,
    move: 1,
    attack: 3,
    isElite: false
  },
  {
    name: 'Vermling Raider',
    level: 0,
    special: null,
    health: 4,
    move: 1,
    attack: 2,
    isElite: false
  },
  {
    name: 'Giant Viper',
    level: 0,
    special: poison,
    health: 2,
    move: 2,
    attack: 1,
    isElite: false
  },
  {
    name: 'Black Sludge',
    level: 1,
    special: Shield,
    health: 9,
    move: 1,
    attack: 2,
    isElite: true
  }
];

const seedMonsters = () => Monster.bulkCreate(monsterStats);

module.exports = seedMonsters;
