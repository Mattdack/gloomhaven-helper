const { Effect } = require('../models');

const effectIcons = [
  {
    name: 'Muddle',
    effect: '&#xf128;'
  },
  {
    name: 'Immobilize',
    effect: '&#xf05e;'
  },
  {
    name: 'Stun',
    effect: '&#xf185;'
  },
  {
    name: 'Strengthen',
    effect: '&#xf44b;'
  },
  {
    name: 'Disarm',
    effect: '&#xf256;'
  },
  {
    name: 'Poison',
    effect: '&#xf54c;'
  },
  {
    name: 'Wound',
    effect: '&#xf06d;'
  },
  {
    name: 'Curse',
    effect: '&#xf0e7;'
  },
  {
    name: 'Bless',
    effect: '&#xf36f;'
  },
  {
    name: 'Shield',
    effect: '&#xf3ed;'
  }
];

const seedEffects = () => Effect.bulkCreate(effectIcons);

module.exports = seedEffects;
