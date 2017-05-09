// Various functions
var actions = module.exports = {};

// Post a tweet containing the status's text
// text : String
actions.postNewTweet = function(bot, text) {
    bot.post('statuses/update', {status: text}
        , function(err, data, response) {
            if (err) {
                console.log(err);
            } else {
                console.log(data.text + ' was tweeted.');
            }
        }
    );
}
// Get list of screen_name's followers
// user : String
actions.getFollowerList = function(bot, user) {
    bot.get('followers/list', {screen_name: user},
        function(err, data, response) {
            if (err) {
                console.log(err);
            } else {
                data.users.forEach(function(user) {
                    console.log(user.name);
                });
            }
        }
    );
}

// Follow screen_name user
// user : String
actions.followUser = function(bot, user) {
    bot.post('friendships/create', {screen_name: user},
        function(err, data, response) {
            if (err) {
                console.log(err);
            } else {
                console.log(data);
            }
        }
    );
}

// Get list of screen_name's following
actions.getFollowing = function(bot) {
    bot.get('friends/list', {screen_name: 'itswill_liu'},
        function(err, data, response) {
            if (err) {
                console.log(err);
            } else {
                console.log(data);
            }
        }
    );
}

// Lookup follower/following
actions.lookupUser = function(bot) {
    bot.get('friendships/lookup', {screen_name: 'ahandvanish'},
        function(err, data, response) {
            if (err) {
                console.log(err);
            } else {
                console.log(data);
            }
        }
    );
}

// Slide in DMs
actions.sendDM = function(bot) {
    bot.post('direct_messages/new', {screen_name: 'itswill_liu',
        text: 'Hello Will'}, function(err, data, response) {
            if (err) {
                console.log(err);
            } else {
                console.log(data);
            }
        }
    );
}

// Get tweets on timeline
// count : int
actions.getTimeline = function(bot, count) {
    // default number of tweets to 5
    var count = count || 5;

    bot.get('statuses/home_timeline', {count: count},
    function(err, data, response) {
        if (err) {
            console.log(err);
        } else {
            data.forEach(function(tweet) {
                console.log(tweet.text);
                console.log(tweet.user.name);
                console.log(tweet.id_str);
                console.log('\n');
            });
        }
    });
}

// Retweet the passed in tweet ID;
// id : String
actions.retweetID = function(bot, id) {
    // change 'retweet' to 'unretweet' to delete retweet
    bot.post('statuses/retweet/:id', {id: id},
        function(err, data, response) {
            if (err) {
                console.log(err);
            } else {
                console.log(data.text + ' was retweeted.');
            }
        }
    );
}

// Like the passed in tweet
// id : String
actions.likeTweet = function(bot, id) {
    // to unlike, do 'favorites/destroy'
    bot.post('favorites/create', {id: id},
        function(err, data, response) {
            if (err) {
                console.log(err);
            } else {
                console.log(data.text + ' was liked.');
            }
        }
    );
}


// Get screen_name of tweet
// id : String
// Return : String
var getScreenName = function(bot, id) {
    bot.get('statuses/show/:id', {id: id},
        function(err, data, response) {
            if (err) {
                console.log(err);
            } else {
                console.log(data.user.screen_name);
                return data.user.screen_name;
            }
        })
}

// Reply to tweet; gets user screen name first
// reply : String
// tweetID : String
actions.replyTweet = function(bot, reply, tweetID) {
    bot.get('statuses/show/:id', {id: tweetID}, function(err, data, response) {
        // Get user screen_name
        var user = data.user.screen_name;
        // reply to tweet
        bot.post('statuses/update', {status: '@' + user + ' ' + reply,
            in_reply_to_status_id: tweetID},
            function(err, data, response) {
                if (err) {
                    console.log(err);
                } else {
                    console.log('You replied to tweet '
                    + data.in_reply_to_status_id_str + ' by user @'
                    + data.in_reply_to_screen_name + ' with the message: '
                    + data.text);
                }
            }
        );
    });
}
