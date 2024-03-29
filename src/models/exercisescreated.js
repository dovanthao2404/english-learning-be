'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ExercisesCreated extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, {
        foreignKey: "userId"
      });
      this.hasMany(models.VocabularyOfExercise, {
        foreignKey: "exercisesCreatedId"
      });
      this.hasMany(models.ExercisesDone, {
        foreignKey: "exercisesCreatedId"
      });
    }
  }
  ExercisesCreated.init({
    name: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ExercisesCreated',
  });
  return ExercisesCreated;
};