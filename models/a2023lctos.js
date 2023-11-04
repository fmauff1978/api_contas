'use strict';
const {
  Model, INTEGER
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class a2023lctos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  a2023lctos.init({
    id: {type:DataTypes.INTEGER,primaryKey:true},
    Cod: DataTypes.INTEGER,
    Data: DataTypes.DATE,
    Lancamento: DataTypes.STRING,
    Conta: DataTypes.STRING,
    Valor: DataTypes.DECIMAL
    
  }, 
  
 {
  sequelize,
    modelName: 'a2023lctos'
  });
  return a2023lctos;
};