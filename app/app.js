require('dotenv').config('../.env');
const express = require('express');
const { errorHandler, notFoundHandler } = require('./errors');

const app = express();

app.use(require('./middlewire'));
app.use(require('./routes'));

app.use(notFoundHandler);

app.use(errorHandler);

module.exports = app;