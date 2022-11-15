const { Effect } = require('../models');

const effectIcons = [
  {
    name: 'Muddle',
    image: '/images/Muddle.png'
  },
  {
    name: 'Immobilize',
    image: '/images/Immobilize.png'
  },
  {
    name: 'Stun',
    image: "/images/Stun.png"
  },
  {
    name: 'Strengthen',
    image: '/images/Strengthen.png'
  },
  {
    name: 'Disarm',
    image: '/images/Disarm.png'
  },
  {
    name: 'Poison',
    image: '/images/Poison.png'
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
