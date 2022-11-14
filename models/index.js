const User = require("./User");
const Campaign = require("./Campaign");
const Encounter = require("./Encounter");
const Player = require("./Player");
const AddedMonster = require("./AddedMonsters");
const Monster = require('./Monster');
const Effect = require("./Effect");

User.hasMany(Campaign);
Campaign.belongsTo(User);

Campaign.hasMany(Encounter);
Encounter.belongsTo(Campaign);

Campaign.hasMany(Player);
Player.belongsTo(Campaign);

// Change AddedMonster and Encounter relationship to One to Many
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
    Monster,
    User,
}