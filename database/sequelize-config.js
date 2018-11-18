const dotenv = require('dotenv').config();

const dialectOptions = (process.env.DEV === '1') ? {} : {ssl: 'Amazon RDS'}
module.exports = {
  use_env_variable: false,
  host: process.env.DB_HOST,
  dialect: 'postgres',
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  logging: false, //console.log,
  pool: { maxConnections: 5, maxIdleTime: 30},
  dialectOptions
};
