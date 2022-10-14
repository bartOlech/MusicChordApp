const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = require('./routes/index');

const urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(bodyParser.json());

app.use('/', urlencodedParser, router);
module.exports = app;