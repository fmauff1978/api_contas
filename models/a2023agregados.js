'use strict';
const {
  Model, INTEGER
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class a2023agregados extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  a2023agregados.init({
    agregado: DataTypes.STRING,
    
    saldo: DataTypes.DECIMAL
  }, 
  
 {
    sequelize, 
    modelName: 'a2023agregados'
  });
  return a2023agregados;
};