// Where you will connect your other routers
var express = require('express');
var router = express.Router();
var chalk = require('chalk');

router.use('/users', require('./user'))

router.use('/tweets', require('./tweet'))

// catch all that won't be reached if you don't put a next
router.use('/*', function(req, res){
  res.send(500).end();
})

router.use(function(err, req, res, next) {
  console.error(chalk.red(err.stack))
  res.status(err.status).send(err.message)
})

module.exports = router
