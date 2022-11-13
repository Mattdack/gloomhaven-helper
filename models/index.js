const User = require("./User");
const Campaign = require("./Campaign");
const Encounter = require("./Encounter");
const Player = require("./Player");
const AddedMonster = require("./Monster");
const Effect = require("./Effect");

User.hasMany(Campaign);
Campaign.belongsTo(User);

Campaign.hasMany(Encounter);
Encounter.belongsTo(Campaign);

Campaign.hasMany(Player);
Player.belongsTo(Campaign);

AddedMonster.belongsToMany(Encounter,{through: `EncounterAddedMonster`})
Encounter.belongsToMany(AddedMonster,{through: `EncounterAddedMonster`});

Player.belongsToMany(Effect,{through: `PlayerEffect`});
Effect.belongsToMany(Player,{through: `PlayerEffect`});

AddedMonster.belongsToMany(Effect,{through: `AddedMonsterEffect`});
Effect.belongsToMany(AddedMonster,{through: `AddedMonsterEffect`});

module.exports = {
    Campaign,
    Player,
    Encounter,
    Effect,
    AddedMonster,
    User,
}