var express = require('express');
var secret = process.env.SECRET || 'secret'

// 
// module.exports = function(phrase) {
//   return phrase === secret;
// }

module.exports = {
  checkAuth: function(req, res, next) {
    if(req.body.pass == secret){
      next();
    }
    else {
      res.status(401).send('Incorrect password. Tweet failed to send.')

    }
  }
}
