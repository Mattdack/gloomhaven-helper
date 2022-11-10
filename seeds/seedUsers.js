const { User } = require('../models');

const users = [
    {
        username: "mattdack",
        password: "securePassword2",
    },
    {
        username: "matthewdacanay",
        password: "lessSecurePassword",
    },
]

const seedUsers = () => User.bulkCreate(users, {individualHooks: true});

module.exports = seedUsers;