var express = require('express');
var router = express.Router();
var twitter  = require('../tweetStorage')
var auth = require('./auth')

router.get('/', function (req, res, next) {
  res.send(twitter.getAllTweets())
});

router.post('/', function(req, res) {
  if( auth(req.body.password )) {
      const tweet = req.body.tweet
      twitter.createTweet(tweet)
      res.status(200).end()
  }
  else {
    res.status(401).send('Incorrect password. Tweet failed to send.')
  }
})

module.exports = router
