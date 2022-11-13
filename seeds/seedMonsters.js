const { Monster } = require('../models');

const monsters = [
  {
    name: 'Chaos-Demon',
    level: 0,
    special: 'Muddle',
    health: 7,
    move: 3,
    attack: 2,
    isElite: false
  },{
    name: 'Chaos-Demon',
    level: 0,
    special: 'Muddle',
    health: 10,
    move: 4,
    attack: 3,
    isElite: true
  },{
    name: 'Chaos-Demon',
    level: 1,
    special: 'Muddle',
    health: 8,
    move: 3,
    attack: 3,
    isElite: false
  },{
    name: 'Chaos-Demon',
    level: 1,
    special: 'Muddle',
    health: 12,
    move: 4,
    attack: 4,
    isElite: true
  },{
    name: 'Chaos-Demon',
    level: 2,
    special: 'Muddle',
    health: 11,
    move: 3,
    attack: 3,
    isElite: false
  },{
    name: 'Chaos-Demon',
    level: 2,
    special: 'Muddle',
    health: 14,
    move: 4,
    attack: 5,
    isElite: true
  },{
    name: 'Chaos-Demon',
    level: 3,
    special: 'Muddle',
    health: 12,
    move: 3,
    attack: 4,
    isElite: false
  },{
    name: 'Chaos-Demon',
    level: 3,
    special: 'Muddle',
    health: 18,
    move: 5,
    attack: 5,
    isElite: true
  },{
    name: 'Living-Corpse',
    level: 0,
    special: null,
    health: 5,
    move: 1,
    attack: 3,
    isElite: false
  },{
    name: 'Living-Corpse',
    level: 0,
    special: null,
    health: 10,
    move: 1,
    attack: 3,
    isElite: true
  },{
    name: 'Living-Corpse',
    level: 1,
    special: null,
    health: 7,
    move: 1,
    attack: 3,
    isElite: false
  },{
    name: 'Living-Corpse',
    level: 1,
    special: null,
    health: 11,
    move: 1,
    attack: 4,
    isElite: true
  },{
    name: 'Living-Corpse',
    level: 2,
    special: null,
    health: 9,
    move: 1,
    attack: 3,
    isElite: false
  },{
    name: 'Living-Corpse',
    level: 2,
    special: null,
    health: 14,
    move: 1,
    attack: 4,
    isElite: true
  },{
    name: 'Living-Corpse',
    level: 3,
    special: null,
    health: 10,
    move: 1,
    attack: 4,
    isElite: false
  },{
    name: 'Living-Corpse',
    level: 3,
    special: null,
    health: 14,
    move: 2,
    attack: 5,
    isElite: true
  },{
    name: 'Living-Spirit',
    level: 0,
    special: 'shield',
    health: 3,
    move: 2,
    attack: 2,
    isElite: false
  },{
    name: 'Living-Spirit',
    level: 0,
    special: 'shield',
    health: 5,
    move: 3,
    attack: 3,
    isElite: true
  },{
    name: 'Living-Spirit',
    level: 1,
    special: 'shield',
    health: 4,
    move: 2,
    attack: 2,
    isElite: false
  },{
    name: 'Living-Spirit',
    level: 1,
    special: 'shield2',
    health: 5,
    move: 3,
    attack: 3,
    isElite: true
  },{
    name: 'Living-Spirit',
    level: 2,
    special: 'shield',
    health: 5,
    move: 3,
    attack: 2,
    isElite: false
  },{
    name: 'Living-Spirit',
    level: 2,
    special: 'shield2',
    health: 7,
    move: 4,
    attack: 3,
    isElite: true
  },{
    name: 'Living-Spirit',
    level: 3,
    special: 'shield',
    health: 6,
    move: 3,
    attack: 3,
    isElite: false
  },{
    name: 'Living-Spirit',
    level: 3,
    special: 'shield2',
    health: 8,
    move: 4,
    attack: 4,
    isElite: true
  },{
    name: 'Stone-Golem',
    level: 0,
    special: null,
    health: 10,
    move: 1,
    attack: 3,
    isElite: false
  },{
    name: 'Stone-Golem',
    level: 0,
    special: 'shield',
    health: 10,
    move: 2,
    attack: 4,
    isElite: true
  },{
    name: 'Stone-Golem',
    level: 1,
    special: 'shield',
    health: 10,
    move: 1,
    attack: 3,
    isElite: false
  },{
    name: 'Stone-Golem',
    level: 1,
    special: 'shield',
    health: 11,
    move: 2,
    attack: 4,
    isElite: true
  },{
    name: 'Stone-Golem',
    level: 2,
    special: 'shield',
    health: 11,
    move: 1,
    attack: 4,
    isElite: false
  },{
    name: 'Stone-Golem',
    level: 2,
    special: 'shield2',
    health: 13,
    move: 2,
    attack: 5,
    isElite: true
  },{
    name: 'Stone-Golem',
    level: 3,
    special: 'shield2',
    health: 11,
    move: 1,
    attack: 4,
    isElite: false
  },{
    name: 'Stone-Golem',
    level: 3,
    special: 'shield3',
    health: 14,
    move: 2,
    attack: 5,
    isElite: true
  },
  {
    name: 'Vermling-Raider',
    level: 0,
    special: null,
    health: 4,
    move: 1,
    attack: 2,
    isElite: false
  },{
    name: 'Vermling-Raider',
    level: 0,
    special: null,
    health: 8,
    move: 1,
    attack: 2,
    isElite: true
  },{
    name: 'Vermling-Raider',
    level: 1,
    special: null,
    health: 5,
    move: 1,
    attack: 2,
    isElite: false
  },{
    name: 'Vermling-Raider',
    level: 1,
    special: null,
    health: 10,
    move: 1,
    attack: 2,
    isElite: true
  },{
    name: 'Vermling-Raider',
    level: 2,
    special: null,
    health: 9,
    move: 2,
    attack: 2,
    isElite: false
  },{
    name: 'Vermling-Raider',
    level: 2,
    special: null,
    health: 14,
    move: 3,
    attack: 3,
    isElite: true
  },{
    name: 'Vermling-Raider',
    level: 3,
    special: null,
    health: 11,
    move: 3,
    attack: 2,
    isElite: false
  },{
    name: 'Vermling-Raider',
    level: 3,
    special: null,
    health: 16,
    move: 3,
    attack: 4,
    isElite: true
  },
  {
    name: 'Giant-Viper',
    level: 0,
    special: 'Poison',
    health: 2,
    move: 2,
    attack: 1,
    isElite: false
  },{
    name: 'Giant-Viper',
    level: 0,
    special: 'Poison',
    health: 3,
    move: 2,
    attack: 2,
    isElite: false
  },{
    name: 'Giant-Viper',
    level: 1,
    special: 'Poison',
    health: 3,
    move: 2,
    attack: 1,
    isElite: false
  },{
    name: 'Giant-Viper',
    level: 1,
    special: 'Poison',
    health: 5,
    move: 2,
    attack: 2,
    isElite: true
  },{
    name: 'Giant-Viper',
    level: 2,
    special: 'Poison',
    health: 4,
    move: 3,
    attack: 1,
    isElite: false
  },{
    name: 'Giant-Viper',
    level: 2,
    special: 'Poison',
    health: 7,
    move: 3,
    attack: 2,
    isElite: true
  },{
    name: 'Giant-Viper',
    level: 3,
    special: 'Poison',
    health: 4,
    move: 3,
    attack: 2,
    isElite: false
  },{
    name: 'Giant-Viper',
    level: 3,
    special: 'Poison',
    health: 8,
    move: 3,
    attack: 3,
    isElite: true
  },{
    name: 'Black-Sludge',
    level: 0,
    special: null,
    health: 4,
    move: 1,
    attack: 2,
    isElite: false
  },{
    name: 'Black-Sludge',
    level: 0,
    special: null,
    health: 8,
    move: 1,
    attack: 2,
    isElite: true
  },{
    name: 'Black-Sludge',
    level: 1,
    special: 'Shield',
    health: 5,
    move: 1,
    attack: 2,
    isElite: false
  },
  {
    name: 'Black-Sludge',
    level: 1,
    special: 'Shield',
    health: 9,
    move: 1,
    attack: 2,
    isElite: true
  },{
    name: 'Black-Sludge',
    level: 2,
    special: 'Shield',
    health: 7,
    move: 1,
    attack: 2,
    isElite: false
  },{
    name: 'Black-Sludge',
    level: 2,
    special: 'Shield',
    health: 11,
    move: 1,
    attack: 3,
    isElite: true
  },{
    name: 'Black-Sludge',
    level: 3,
    special: 'Shield',
    health: 8,
    move: 1,
    attack: 3,
    isElite: false
  },{
    name: 'Black-Sludge',
    level: 3,
    special: 'Poison, Shield',
    health: 11,
    move: 2,
    attack: 3,
    isElite: true
  },
  {
    name: 'Blood-Imp',
    level: 4,
    special: 'Muddle',
    health: 7,
    move: 3,
    attack: 2,
    isElite: false
  },{
    name: 'Blood-Imp',
    level: 3,
    special: 'Muddle',
    health: 5,
    move: 3,
    attack: 2,
    isElite: false
  },{
    name: 'Blood-Imp',
    level: 3,
    special: 'Muddle',
    health: 10,
    move: 3,
    attack: 2,
    isElite: true
  },{
    name: 'Blood-Imp',
    level: 1,
    special: 'Muddle',
    health: 4,
    move: 2,
    attack: 1,
    isElite: false
  },{
    name: 'Blood-Imp',
    level: 1,
    special: 'Muddle',
    health: 6,
    move: 2,
    attack: 2,
    isElite: true
  },{
    name: 'Blood-Imp',
    level: 2,
    special: 'Muddle',
    health: 5,
    move: 3,
    attack: 1,
    isElite: false
  },{
    name: 'Blood-Imp',
    level: 2,
    special: 'Muddle',
    health: 7,
    move: 3,
    attack: 2,
    isElite: true
  },{
    name: 'Blood-Imp',
    level: 0,
    special: null,
    health: 3,
    move: 2,
    attack: 1,
    isElite: false
  },{
    name: 'Blood-Imp',
    level: 0,
    special: 'Muddle',
    health: 4,
    move: 2,
    attack: 2,
    isElite: true
  },{
    name: 'Black-Imp',
    level: 0,
    special: null,
    health: 3,
    move: 1,
    attack: 1,
    isElite: false
  },{
    name: 'Black-Imp',
    level: 0,
    special: 'Poison',
    health: 4,
    move: 1,
    attack: 2,
    isElite: true
  },{
    name: 'Black-Imp',
    level: 1,
    special: 'Poison',
    health: 4,
    move: 1,
    attack: 1,
    isElite: false
  },{
    name: 'Black-Imp',
    level: 1,
    special: 'Poison',
    health: 6,
    move: 1,
    attack: 2,
    isElite: true
  },{
    name: 'Black-Imp',
    level: 2,
    special: 'Poison',
    health: 5,
    move: 1,
    attack: 2,
    isElite: false
  },{
    name: 'Black-Imp',
    level: 2,
    special: 'Poison',
    health: 8,
    move: 1,
    attack: 2,
    isElite: true
  },{
    name: 'Black-Imp',
    level: 3,
    special: 'Poison',
    health: 5,
    move: 1,
    attack: 2,
    isElite: false
  },{
    name: 'Black-Imp',
    level: 3,
    special: 'Poison, Attackers gain Disadvantage',
    health: 8,
    move: 1,
    attack: 3,
    isElite: true
  },{
    name: 'Black-Imp',
    level: 4,
    special: 'Poison',
    health: 7,
    move: 1,
    attack: 2,
    isElite: false
  },{
    name: 'Vermling-Scout',
    level: 0,
    special: null,
    health: 2,
    move: 3,
    attack: 1,
    isElite: false
  },{
    name: 'Vermling-Scout',
    level: 0,
    special: null,
    health: 4,
    move: 3,
    attack: 2,
    isElite: true
  },{
    name: 'Vermling-Scout',
    level: 1,
    special: null,
    health: 3,
    move: 3,
    attack: 1,
    isElite: false
  },{
    name: 'Vermling-Scout',
    level: 1,
    special: null,
    health: 5,
    move: 3,
    attack: 2,
    isElite: true
  },{
    name: 'Vermling-Scout',
    level: 2,
    special: null,
    health: 3,
    move: 3,
    attack: 2,
    isElite: false
  },{
    name: 'Vermling-Scout',
    level: 2,
    special: null,
    health: 5,
    move: 4,
    attack: 3,
    isElite: true
  },{
    name: 'Vermling-Scout',
    level: 3,
    special: null,
    health: 5,
    move: 3,
    attack: 2,
    isElite: false
  },{
    name: 'Vermling-Scout',
    level: 3,
    special: null,
    health: 7,
    move: 4,
    attack: 3,
    isElite: true
  },{
    name: 'Rat-Monstrosity',
    level: 0,
    special: 'On Death, all adjacdent figures suffer 1 damage',
    health: 4,
    move: 1,
    attack: 1,
    isElite: false
  },{
    name: 'Rat-Monstrosity',
    level: 0,
    special: 'On Death, all adjacdent figures suffer 1 damage',
    health: 6,
    move: 1,
    attack: 2,
    isElite: true
  },{
    name: 'Rat-Monstrosity',
    level: 1,
    special: 'On Death, all adjacdent figures suffer 1 damage',
    health: 4,
    move: 1,
    attack: 2,
    isElite: false
  },{
    name: 'Rat-Monstrosity',
    level: 1,
    special: 'On Death, all adjacdent figures suffer 2 damage. Advantage',
    health: 7,
    move: 1,
    attack: 2,
    isElite: true
  },{
    name: 'Rat-Monstrosity',
    level: 2,
    special: 'On Death, all adjacdent figures suffer 1 damage',
    health: 5,
    move: 2,
    attack: 2,
    isElite: false
  },{
    name: 'Rat-Monstrosity',
    level: 2,
    special: 'On Death, all adjacdent figures suffer 2 damage. Advantage',
    health: 8,
    move: 1,
    attack: 3,
    isElite: true
  },{
    name: 'Rat-Monstrosity',
    level: 3,
    special: 'On Death, all adjacdent figures suffer 2 damage',
    health: 6,
    move: 2,
    attack: 3,
    isElite: false
  },{
    name: 'Rat-Monstrosity',
    level: 2,
    special: 'On Death, all adjacdent figures suffer 2 damage. Advantage',
    health: 10,
    move: 2,
    attack: 3,
    isElite: true
  },{
    name: 'Blood-Monstrosity',
    level: 0,
    special: 'On Death, all adjacdent figures suffer 1 damage.',
    health: 7,
    move: 2,
    attack: 2,
    isElite: false
  },{
    name: 'Blood-Monstrosity',
    level: 0,
    special: 'On Death, all adjacdent figures suffer 1 damage.',
    health: 12,
    move: 2,
    attack: 3,
    isElite: true
  },{
    name: 'Blood-Monstrosity',
    level: 1,
    special: 'On Death, all adjacdent figures suffer 2 damage.',
    health: 9,
    move: 2,
    attack: 2,
    isElite: false
  },{
    name: 'Blood-Monstrosity',
    level: 1,
    special: 'On Death, all adjacdent figures suffer 3 damage. Shield',
    health: 12,
    move: 2,
    attack: 3,
    isElite: true
  },{
    name: 'Blood-Monstrosity',
    level: 2,
    special: 'On Death, all adjacdent figures suffer 2 damage.',
    health: 10,
    move: 2,
    attack: 3,
    isElite: false
  },{
    name: 'Blood-Monstrosity',
    level: 2,
    special: 'On Death, all adjacdent figures suffer 3 damage. Shield',
    health: 15,
    move: 2,
    attack: 4,
    isElite: true
  },{
    name: 'Blood-Monstrosity',
    level: 3,
    special: 'On Death, all adjacdent figures suffer 3 damage.',
    health: 12,
    move: 3,
    attack: 3,
    isElite: false
  },{
    name: 'Blood-Monstrosity',
    level: 3,
    special: 'On Death, all adjacdent figures suffer 4 damage. Shield',
    health: 18,
    move: 3,
    attack: 4,
    isElite: true
  },{
    name: 'Zealot',
    level: 0,
    special: null,
    health: 4,
    move: 2,
    attack: 2,
    isElite: false
  },{
    name: 'Zealot',
    level: 0,
    special: null,
    health: 7,
    move: 2,
    attack: 3,
    isElite: true
  },{
    name: 'Zealot',
    level: 1,
    special: null,
    health: 6,
    move: 2,
    attack: 2,
    isElite: false
  },{
    name: 'Zealot',
    level: 1,
    special: 'Wound',
    health: 8,
    move: 2,
    attack: 3,
    isElite: true
  },{
    name: 'Zealot',
    level: 2,
    special: null,
    health: 7,
    move: 3,
    attack: 3,
    isElite: false
  },{
    name: 'Zealot',
    level: 2,
    special: 'Wound',
    health: 11,
    move: 3,
    attack: 3,
    isElite: true
  },{
    name: 'Zealot',
    level: 3,
    special: 'Wound',
    health: 8,
    move: 3,
    attack: 3,
    isElite: false
  },{
    name: 'Zealot',
    level: 3,
    special: 'Wound',
    health: 13,
    move: 3,
    attack: 4,
    isElite: true
  }
];

const seedMonsters = () => Monster.bulkCreate(monsters);

module.exports = seedMonsters;
