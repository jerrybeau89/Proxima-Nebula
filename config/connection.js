const Sequelize = require('sequelize');
require('dotenv').config();

/* Before setting up for completion, uncomment code below to set up for HEROKU */

let sequelize;

if (process.env.JAWSDB_PINK_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_PINK_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    }
  );
}

module.exports = sequelize;