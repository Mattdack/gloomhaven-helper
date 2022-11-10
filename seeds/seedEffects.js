const { Effect } = require('../models');

const effectIcons = [
  {
    name: 'Muddle',
    image: '/images/muddle.png'
  },
  {
    name: 'Immobilize',
    image: '/images/immobilize.png'
  },
  {
    name: 'Stun',
    image: '/images/stun.png'
  },
  {
    name: 'Strengthen',
    image: '/images/strengthen.png'
  },
  {
    name: 'Disarm',
    image: '/images/disarm.png'
  },
  {
    name: 'Poison',
    image: '/images/poison.png'
  },
  {
    name: 'Wound',
    image: '/images/wound.png'
  },
  {
    name: 'Shield',
    image: '&#xf3ed;'
  }
];

const seedEffects = () => Effect.bulkCreate(effectIcons);

module.exports = seedEffects;
