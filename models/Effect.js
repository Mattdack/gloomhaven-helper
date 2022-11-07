const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Effect extends Model {}

Effect.init({
    // add properites here, ex:
    name: {
         type: DataTypes.STRING
    },
    effect: {
         type: DataTypes.STRING
    }
},{
    sequelize
});

module.exports=Effect
{/* <script src="https://kit.fontawesome.com/1eb41d99df.js" crossorigin="anonymous"></script> */}