'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('User', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userName: {
        allowNull: false,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
    }).then( () => {
      return queryInterface.createTable('Score', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        score: {
          allowNull: false,
          default: 0,
          type: Sequelize.INTEGER
        },
        user_id: {
          type: Sequelize.INTEGER,
          references: { model: 'User', key: 'id' },
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
      })
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Score')
      .then(() => queryInterface.dropTable('User'));
  },
};
