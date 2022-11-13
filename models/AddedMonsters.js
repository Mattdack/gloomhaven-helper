const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Monster extends Model {}

AddedMonsters.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 30],
      },
    },
    level: {
      type: DataTypes.INTEGER,
      allowNull: false,
      default: 0,
      validate: {
        max: 8,
        isNumeric: true
      }
    },
    special: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 60]
      }
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
    attack: {
      type: DataTypes.INTEGER,
      allowNull: false,
      default: 1,
      validate: {
        isInt: true,
        min: 1,
      },
    },
    
    isElite: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      default: false,
    }
  },
  {
    sequelize,
  }
);

module.exports = AddedMonster;
