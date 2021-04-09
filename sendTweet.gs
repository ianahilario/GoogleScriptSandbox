//Setup a Twitter dev account to get authorization data
function sendTweet() {
  var twitterKeys = {
    TWITTER_CONSUMER_KEY: "//your API key",
    TWITTER_CONSUMER_SECRET: "//your API secret key",
    TWITTER_ACCESS_TOKEN: "//your access token key",
    TWITTER_ACCESS_SECRET: "//your access token secret key",
 }

//Google Script service to store key-value pairs
var props = goog.getScriptProperties();
props.setProperties(twitterKeys);

//Authorize Twitter access
//Make sure that Twitterlib library has been added for it to work
var service = new Twitterlib.OAuth(props);
  
//Post a text-only tweet
service.sendTweet("hello world");
}
