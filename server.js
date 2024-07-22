// Import Modules
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');

// Database
require('./config/database');

const Book = require("./models/book.js");

const app = express();

// Middleware
app.use(morgan('dev'));

app.use(express.urlencoded({ extended: false }));

app.use(methodOverride('_method'));

// Routes
app.get('/', (req, res) => {
  res.send('The server is running!');
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});