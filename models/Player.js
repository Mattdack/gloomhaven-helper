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
      unique: true,
      validate: {
        isInt: true,
      },
    },
    attack: {
      type: DataTypes.INTEGER,
      allowNull: false,
      default: 1,
      validate: {
        isInt: true,
        min: 1,
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
    move: {
      type: DataTypes.INTEGER,
      allowNull: false,
      default: 2,
      validate: {
        isInt: true,
        min: 0,
      },
    },
  },
  {
    sequelize,
  }
);

module.exports = Player;
