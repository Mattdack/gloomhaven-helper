const Campaign = require("./Campaign");
const Encounter = require("./Encounter")
const Effect = require("./Effect")
const Monster = require("./Monster")
const Player = require("./Player")
const UserData = require("./UserData")

Owner.hasMany(Pet);
Pet.belongsTo(Owner);

Pet.hasMany(Toy);
Toy.belongsTo(Pet);

module.exports = {
    Owner:Owner,
    Pet:Pet,
    Toy:Toy
}