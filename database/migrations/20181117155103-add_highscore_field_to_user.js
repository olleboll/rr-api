'use strict';

module.exports = {
  up: function(queryInterface, Sequelize) {
    // logic for transforming into the new state
    queryInterface.addColumn(
      'User',
      'highscore',
      {
        type: Sequelize.INTEGER,
        references: { model: 'Score', key: 'id' },
      }
    );

  },

  down: function(queryInterface, Sequelize) {
    // logic for reverting the changes
    queryInterface.removeColumn(
      'User',
      'highscore'
    );
  }
};
