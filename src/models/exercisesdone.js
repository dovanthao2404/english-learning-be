'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ExercisesDone extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ExercisesDone.init({
    name: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    exercisesCreatedId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ExercisesDone',
  });
  return ExercisesDone;
};