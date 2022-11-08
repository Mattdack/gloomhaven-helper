const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Player extends Model {}

Player.init(
  {
    playerName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 30],
        isAlpha: true,
      },
    },
    playerLevel: {
      type: DataTypes.INTEGER,
      allowNull: false,
      default: 1,
      validate: {
        isInt: true,
      },
    },
    playerHealth: {
      type: DataTypes.INTEGER,
      allowNull: false,
      default: 10,
      validate: {
        isInt: true,
        min: 0,
      },
    },
    experience: {
      type: DataTypes.INTEGER,
      allowNull: false,
      default: 1,
      validate: {
        isInt: true,
      },
    }
  },
  {
    sequelize,
  }
);

module.exports = Player;
