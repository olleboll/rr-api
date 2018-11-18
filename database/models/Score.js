'use strict';

const Score = function(sequelize, DataTypes) {
  var Score = sequelize.define('Score', {
    score: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    uri: {
      type: DataTypes.VIRTUAL,
      get: function(){
        return "/api/v1/score/"+this.id
      }
    }
  });

  return Score;
};

module.exports = Score;
