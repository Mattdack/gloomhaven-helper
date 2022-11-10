const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Encounter extends Model {}

Encounter.init(
  {
    number: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: true,
        min: 1,
        max: 10,
      },
    },
  },
  {
    sequelize,
  }
);

module.exports = Encounter;
