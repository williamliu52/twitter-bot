// Various functions
var actions = module.exports = {};

// Post a tweet containing the status's text
actions.postNewTweet = function(bot) {
    bot.post('statuses/update', {status: 'hello world!'}
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
actions.getFollowerList = function(bot) {
    bot.get('followers/list', {screen_name: 'itswill_liu'},
        function(err, data, response) {
            if (err) {
                console.log(err);
            } else {
                data.users.forEach(function(user) {
                    console.log(user.name);
                })
            }
        }
    );
}

// Follow screen_name user
actions.followUser = function(bot) {
    bot.post('friendships/create', {screen_name: 'ahandvanish'},
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
