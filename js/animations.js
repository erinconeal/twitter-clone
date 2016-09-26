$(document).ready(function() {
  var tweetCon = $('#tweet-controls');
  var tweetCom = $('.tweet-compose');
  var counter = $('#char-count');
  var clone = $('#copyMe');
  var stream = $('#stream');
  var submit = $('.button');
  var actions = $('.tweet-actions');
  var tweet = $('.tweet');
  var stats = $('.stats');

  // Initially, the Tweet button and the character count button should be hidden (CSS).
  tweetCon.hide();
  actions.hide();
  stats.hide();

  // When the user clicks on the textarea, the textarea should double in size and the character count and Tweet buttons should be revealed.
  tweetCom.on('click', function() {
    tweetCon.show();
    tweetCom.css("height", "5em");
  });

  // As the user types, the character count should decrease.
  //create function to count characters
  tweetCom.keydown(function() {
    var count = 140 - tweetCom.val().length;
    counter.text(count);
    // When there are 10 or less characters, the character counter should turn red.
    if (count <= 10) {
      counter.css({color: "red"});
    }
    else {
      counter.css({color: "#999"});
    }
    // If the user puts in more than 140 characters, the tweet button should be disabled (and re-enabled when there are <= 140 chars).
    if (count < 0) {
      submit.attr("disabled", "disabled");
    }
    else {
      submit.attr("disabled", false);
    }
  });

  // When the user successfully inputs characters and clicks the “Tweet” button, a new tweet should be created and added to the tweet stream in the main column, using the user’s fake profile image in the top left and username/fullname.
  submit.click(function() {
    var newTweet = clone.clone();
    var name = newTweet.find('.fullname');
    var twit = newTweet.find('.tweet-text');
    var image = newTweet.find('.avatar');
    var atHandleName = newTweet.find('.username');

    name.text('erin');
    atHandleName.text('@erin');
    twit.text(tweetCom.val());
    image.attr('src', 'img/alagoon.jpg');

    newTweet.prependTo(stream);
  });

  // The tweet actions (Reply, Retweet, etc) should only show up when you hover over that individual tweet. Otherwise, they should be hidden.
  tweet.mouseover(function() {
    $('.tweet-actions', this).show();
  });

  tweet.mouseleave(function() {
    actions.hide();
    stats.hide();
  });

  // The Retweets/timestamp/Reply areas should also be hidden by default. These should only expand if you click on the tweet. Have the students use a jQuery animation to accomplish the reveal, similar to how it’s done on Twitter.com
  tweet.click(function() {
    $('.stats', this).show();
  });

});

//
// Black Diamond
//
// Make timestamps similar to how they look on Twitter (1h, 18m, 1m) and use the jQuery "timeago" plugin to make them automatic.
// Implement the icons for when a tweet is favorited/retweeted in the upper right of the tweet.
// Implement the Bootstrap tooltips for when you hover over a user’s avatar image
// Persist new tweets using local storage
// Persist new tweets using a service like parse https://parse.com/
