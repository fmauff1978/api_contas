'use strict';
const {
  Model, INTEGER
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class a2023posicao extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  a2023posicao.init({
    posicao: DataTypes.DATE
    
  }, 
  
 {
    sequelize, 
    modelName: 'a2023posicao'
  });
  return a2023posicao;
};