'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class VocabularyOfUnit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  VocabularyOfUnit.init({
    en: DataTypes.STRING,
    vi: DataTypes.STRING,
    unitId: DataTypes.INTEGER,
    isHard: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'VocabularyOfUnit',
  });
  return VocabularyOfUnit;
};