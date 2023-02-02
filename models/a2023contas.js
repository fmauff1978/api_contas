'use strict';
const {
  Model, INTEGER
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class a2023contas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  a2023contas.init({
    conta: DataTypes.STRING,
    tipo: DataTypes.INTEGER,
    natureza: DataTypes.STRING,
    enquadramento: DataTypes.STRING,
    cod_enq: DataTypes.STRING,
    mod_despesa: DataTypes.STRING,
    em_uso: DataTypes.BOOLEAN,
    saldo: DataTypes.DECIMAL
  }, 
  
 {
    sequelize, paranoid: true,
    modelName: 'a2023contas', defaultScope: {where:{ em_uso: true}}
  });
  return a2023contas;
};