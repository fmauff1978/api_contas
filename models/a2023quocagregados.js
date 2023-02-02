'use strict';
const {
  Model, INTEGER
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class a2023quocientesagregados extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  a2023quocientesagregados.init({
    agregado: DataTypes.STRING,
    
    saldo: DataTypes.DECIMAL
  }, 
  
 {
    sequelize, 
    modelName: 'a2023quocientesagregados'
  });
  return a2023quocientesagregados;
};