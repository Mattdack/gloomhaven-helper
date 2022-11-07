const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Campaign extends Model {}

Campaign.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [8, 30],
        isAlphaNumeric: true,
      },
    },
    numPlayers: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: true,
        min: 2,
        max: 4,
      },
    },
  },
  {
    sequelize,
  }
);

module.exports = Campaign;
