'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class VocabularyWrong extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.ExercisesDone, {
        foreignKey: "exercisesDoneId"
      });
    }
  }
  VocabularyWrong.init({
    en: DataTypes.STRING,
    vi: DataTypes.STRING,
    exercisesDoneId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'VocabularyWrong',
  });
  return VocabularyWrong;
};