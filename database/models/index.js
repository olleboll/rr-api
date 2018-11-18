'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(module.filename);
const env = process.env.NODE_ENV || 'dev';
const conf = require('../../config/db')[env];

const db = {};
console.log(conf)
const sequelize = new Sequelize(conf.name, conf.user, conf.pass, {
  host: '127.0.0.1',
  dialect: 'postgres',
  define: {
    freezeTableName: true
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  logging: false,
  //storage: '../database.sqlite'
});


sequelize.authenticate().then(() => {
  console.log('DB connection has been established successfully.');
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});

fs.readdirSync(__dirname).filter(function(file) {
  return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
}).forEach(function(file) {
  var model = sequelize['import'](path.join(__dirname, file));
  db[model.name] = model;
});

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.User.belongsTo(db.Score, { foreignKey: { name: 'highscore', allowNull: true }})
db.Score.belongsTo(db.User, { foreignKey: { name: 'user_id', allowNull: false }})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db;
