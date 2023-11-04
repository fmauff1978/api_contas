'use strict';
const {
  Model, INTEGER
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class lista_contas2023 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  lista_contas2023.init({

    conta: DataTypes.STRING,
    tipo: DataTypes.INTEGER,
    natureza: DataTypes.STRING,
    enquadramento: DataTypes.STRING,
    em_uso: DataTypes.BOOLEAN,
    saldo: DataTypes.DECIMAL,
    createdAt: DataTypes.DATE,    
    updatedAt: DataTypes.DATE,
    deletedAt: DataTypes.DATE

    
  }, 
  
 {
    sequelize, 
    modelName: 'lista_contas2023'
  });
  return lista_contas2023;
};