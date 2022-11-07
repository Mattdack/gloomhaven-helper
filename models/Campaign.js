const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Campaign extends Model { }

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
    PlayerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true
    }
  },
  {
    sequelize,
  }
);

module.exports = Campaign;
