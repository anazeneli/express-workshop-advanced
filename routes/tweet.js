var express = require('express');
var router = express.Router();
var tweets  = require('../tweetStorage')
var auth = require('./auth')

router.get('/', function (req, res, next) {
  res.send(tweets.getAllTweets())
});

router.post('/', function(req, res) {
  if( auth(req.body.password )) {
      const tweet = req.body.tweet
      tweets.createTweet(tweet)
      res.status(200).end()
  }
  else {
    res.status(401).send('Incorrect password. Tweet failed to send.')
  }
})

module.exports = router
