// npm init -y  ||  initialize npm
// npm i mysql2 sequelize express bcrypt dotenv  ||  installed dependencies

// ======== CONNECTION REQUIREMENTS ======== //
const sequelize = require('./config/connection'); // links sequelize into file
const express = require('express'); // links express into file
const app = express(); // links express into app
const PORT = process.env.PORT || 3001; // specifies and links local port into file

// ======== CONNECTION REQUIREMENTS ======== //


// turns on connection to server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});