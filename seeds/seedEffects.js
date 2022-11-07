const { Effect } = require('../models');

const effectIcons = [
  {
    name: 'Muddle',
    effects: '&#xf128;'
  },
  {
    name: 'Immobilize',
    effects: '&#xf05e;'
  },
  {
    name: 'Stun',
    effects: '&#xf185;'
  },
  {
    name: 'Strengthen',
    effects: '&#xf44b;'
  },
  {
    name: 'Disarm',
    effects: '&#xf256;'
  },
  {
    name: 'Poison',
    effects: '&#xf54c;'
  },
  {
    name: 'Wound',
    effects: '&#xf06d;'
  },
  {
    name: 'Curse',
    effects: '&#xf0e7;'
  },
  {
    name: 'Bless',
    effects: '&#xf36f;'
  },
  {
    name: 'Shield',
    effects: '&#xf3ed;'
  }
];

const seedEffects = () => Effect.bulkCreate(effectIcons);

module.exports = seedEffects;
