// by default, only sudo-ers can see dotenv
// only need to run in entry point 
require('dotenv').config();

var express = require('express');
var app = express();
var chalk = require('chalk');
var volleyball = require('volleyball');
var bodyParser = require('body-parser');
var routes = require('./routes');

app.use(volleyball)
app.use(bodyParser.json());

app.use('/api', routes)

app.get('/', function (req, res, next) {
  res.send('Root Route');
});

var PORT = 8000;

app.listen(PORT, function () {
  console.log(chalk.blue('server listening on port: ') + chalk.magenta(PORT));
});
