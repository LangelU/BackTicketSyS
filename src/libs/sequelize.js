const { Sequelize } = require('sequelize');

const  { config } = require('../config/config');
const setupModels = require('./../models');
  
const sequelize = new Sequelize(
  config.dbName,
  config.dbUser,
  config.dbPassword,
  {
    host: config.dbHost,
    dialect: 'mysql' 
  }
);

setupModels(sequelize);
sequelize.sync();
module.exports = sequelize;