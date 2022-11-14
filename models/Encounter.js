const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Encounter extends Model {}

Encounter.init(
  {},
  {
    sequelize,
  }
);

module.exports = Encounter;
