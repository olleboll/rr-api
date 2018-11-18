'use strict';

const User = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    userName: {
      allowNull: false,
      type: DataTypes.STRING
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    uri: {
      type: DataTypes.VIRTUAL,
      get: function(){
        return "/api/v1/user/"+this.id
      }
    }
  });

  return User;
};

module.exports = User;
