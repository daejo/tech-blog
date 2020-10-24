// npm init -y  ||  initialize npm
// npm i mysql2 sequelize express bcrypt dotenv express-session connect-session-sequelize  ||  installed dependencies

// ======== CONNECTION REQUIREMENTS ======== //
const sequelize = require('./config/connection'); // links sequelize into file
const express = require('express'); // links express into file
const app = express(); // links express into app
const PORT = process.env.PORT || 3001; // specifies and links local port into file

// ======== ROUTE REQUIREMENTS ======== //
const routes = require('./controllers'); // links routes from controllers folder

// ======== PATH REQUIREMENTS ======== //
const path = require('path');

// ======== SESSION REQUIREMENTS ======== //
const session = require('express-session'); // links express-session into file
const SequelizeStore = require('connect-session-sequelize')(session.Store); // links connection from session to seqeulize
const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

// ======== HANDLEBARS REQUIREMENTS ======== //
const helpers = require('./utils/helpers');
const exphbs = require("express-handlebars");
const hbs = exphbs.create({ helpers });

app.use(session(sess)); // turns on session
app.engine("handlebars", hbs.engine); // states handle bars is incharge of the engine
app.set("view engine", "handlebars"); // states handlebars is incharge of displaying
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes); // turns on routes

// turns on connection to server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});