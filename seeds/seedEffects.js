const { Effect } = require('../models');

const effectIcons = [
  {
    name: 'Muddle',
    image: '../../public/images/muddle'
  },
  {
    name: 'Immobilize',
    image: '/images/immobilize.png'
  },
  {
    name: 'Stun',
    image: "<img src='/images/stun.png'></img>"
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
