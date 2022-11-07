const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Monster extends Model {}

Monster.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 30],
        isAlpha: true,
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
    isElite: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      default: false,
    },
  },
  {
    sequelize,
  }
);

module.exports = Monster;
