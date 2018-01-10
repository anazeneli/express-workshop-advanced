var express = require('express');
var password = 'password' // || process.env.SECRET

module.exports = function(phrase) {
  return phrase === password;
}
//
// module.exports = {
//   checkAuth: function(req, res, next) {
//     if(req.body.pass == secret){
//       next();
//     }
//     else {
//       res.status(401).send('Incorrect password. Tweet failed to send.')
//
//     }
//   }
// }
