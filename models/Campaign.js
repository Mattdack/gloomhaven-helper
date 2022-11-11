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
        len: [8, 40]
      }
    },
  },
  {
    sequelize,
  }
);

module.exports = Campaign;
