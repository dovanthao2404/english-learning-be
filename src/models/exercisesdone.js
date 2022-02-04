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
      this.belongsTo(models.User, {
        foreignKey: "userId"
      });
      this.hasMany(models.VocabularyWrong, {
        foreignKey: "exercisesDoneId"
      });
      this.belongsTo(models.ExercisesCreated, {
        foreignKey: "exercisesCreatedId"
      });
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