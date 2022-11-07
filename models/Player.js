const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Player extends Model {}

Player.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 30],
        isAlpha: true,
      },
    },
    level: {
      type: DataTypes.INTEGER,
      allowNull: false,
      default: 1,
      validate: {
        isInt: true,
      },
    },
    health: {
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
    },
    effect: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null,
    }
  },
  {
    sequelize,
  }
);

module.exports = Player;
