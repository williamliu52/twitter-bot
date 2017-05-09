var Twit = require('twit');
var Actions = require('./actions.js');

var bot = new Twit({
    consumer_key: process.env.TWITTERBOT_CONSUMER_KEY,
    consumer_secret: process.env.TWITTERBOT_CONSUMER_KEY_SECRET,
    access_token: process.env.TWITTERBOT_ACCESS_TOKEN,
    access_token_secret: process.env.TWITTERBOT_ACCESS_TOKEN_SECRET,
    timeout_ms: 60*1000
});

// Actions.getFollowerList(bot);
// Actions.getTimeline(bot, 1);
// var user = Actions.getScreenName(bot, '861772744484155392');
Actions.replyTweet(bot, 'interesting2', '861772744484155392');
