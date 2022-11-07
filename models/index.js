const Campaign = require("./Campaign");
const Encounter = require("./Encounter")
const Effect = require("./Effect")
const Monster = require("./Monster")
const Player = require("./Player")
const User = require("./User")

Owner.hasMany(Pet);
Pet.belongsTo(Owner);

Pet.hasMany(Toy);
Toy.belongsTo(Pet);

User.hasMany(Campaign);
Campaign.belongsTo(User);

Campaign.hasMany(Encounter);
Encounter.belongsTo(Campaign);

Campaign.hasMany(Player);
Player.belongsTo(Campaign);

Encounter.hasMany(Monster);
Monster.belongsTo(Encounter);

Player.hasMany(Effect);
Effect.belongsTo(Player);

Monster.hasMany(Effect);
Effect.belongsTo(Monster);

module.exports = {
    Campaign:Campaign,
    Encounter:Encounter,
    Effect:Effect,
    Monster:Monster,
    Player:Player,
    User:User,
}