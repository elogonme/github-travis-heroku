// server.js version 3.0 January 2020
require('dotenv').config();

const express = require('express');

const app = express();

// const hostname = process.env.HOST;
const PORT = process.env.PORT || 8080;

require('./controller/api-routes')(app);

const server = app.listen(PORT, () => {
  // you will need to fix this line and the line below once you run the eslint test
  console.log('app running on port ', PORT);
});

// eslint-disable-next-line no-console
console.log('server.js: file has finished reading');

module.exports = server;
