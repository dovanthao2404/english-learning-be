'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('VocabularyOfUnits', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      en: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      vi: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      unitId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      isHard: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('VocabularyOfUnits');
  }
};