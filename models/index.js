const User = require("./User");
const Campaign = require("./Campaign");
const Encounter = require("./Encounter");
const Player = require("./Player");
const Monster = require("./Monster");
const Effect = require("./Effect");

User.hasMany(Campaign);
Campaign.belongsTo(User);

Campaign.hasMany(Encounter);
Encounter.belongsTo(Campaign);

Campaign.hasMany(Player);
Player.belongsTo(Campaign);

Monster.belongsToMany(Encounter,{through: `EncounterMonster`})
Encounter.belongsToMany(Monster,{through: `EncounterMonster`});

Player.belongsToMany(Effect,{through: `PlayerEffect`});
Effect.belongsToMany(Player,{through: `PlayerEffect`});

Monster.belongsToMany(Effect,{through: `MonsterEffect`});
Effect.belongsToMany(Monster,{through: `MonsterEffect`});

module.exports = {
    Campaign,
    Player,
    Encounter,
    Effect,
    Monster,
    User,
}