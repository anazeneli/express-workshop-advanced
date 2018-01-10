var express = require('express');
var router = express.Router();
var users  = require('../userStorage')

router.get('/', function (req, res, next) {
  res.send(users.getAllUsers())
});

router.get('/:name', function (req, res, next) {
  var name = req.params.name;
  console.log(name);
  res.send(users.getUserByName(name));

});

router.post('/', function(req,res){
  if(getUserByName(req.body.name)) {
      var err = new Error('User already exists"');
      next(err);
  }
  else {
    users.createUser(req.body.name, req.body.age, req.body.salary)
    res.status(200).end()
  }
})

module.exports = router
