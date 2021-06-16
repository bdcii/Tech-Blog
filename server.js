//Dependencies
const express = require('express');
const path = require('path');
const routes = require('./controllers');
const sequelize = require('./config/connection');

const exphbs = require('express-handlebars');
const hbs = exphbs.create({ helpers});

const session = require('express-session');

const helpers = require('./utils/helpers');

const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

