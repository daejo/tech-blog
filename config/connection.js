const Sequelize = require('sequelize'); // links sequelize into file


require('dotenv').config(); // links to specified .env file

let sequelize; // links sequelize variable into either the localdb or jawsdb

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306 // local db port
  });
}

module.exports = sequelize;