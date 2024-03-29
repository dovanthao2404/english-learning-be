'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class VocabularyOfExercise extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.ExercisesCreated, {
        foreignKey: "exercisesCreatedId"
      });
    }
  }
  VocabularyOfExercise.init({
    vi: DataTypes.STRING,
    en: DataTypes.STRING,
    exercisesCreatedId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'VocabularyOfExercise',
  });
  return VocabularyOfExercise;
};