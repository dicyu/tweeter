/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() {

  
  const tweetData = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants."
      },
      "created_at": timeago.format(1461116232227)
    },
    {
      "user": {
        "name": "Bob",
        "avatars": "https://i.imgur.com/73hZDYK.png",
        "handle": "@bobb" },
        "content": {
          "text": "Obi-Wan Kenobi was the strongest jedi. Don't @ me."
        },
        "created_at": timeago.format('2021-12-13')
      },
      {
        "user": {
          "name": "Steph",
          "avatars": "https://i.imgur.com/nlhLi3I.png",
          "handle": "@sssteph" },
        "content": {
          "text": "I am tired."
        },
        "created_at": timeago.format('2021-12-10')
      }
    ]
    
    // Function to add a tweet into the database using append
    const createTweetElement = function(newTweet) {
      const $tweet = $('<article>').addClass("tweet");
      
      // HTML container for the new tweet
      const tweetHTML = `
      <header>
      <img src="${newTweet.user.avatars}">
      <h4>${newTweet.user.name}</h4>
      <span class="handle">
      ${newTweet.user.handle}
      </span>
      </header>
      <article class="inner-tweets">
      <p>${newTweet.content.text}</p>
      </article>
      <footer class="tweet-footer">
      ${newTweet['created_at']}
      <span>
      <i class="fas fa-flag"></i>
      <i class="fas fa-retweet"></i>
      <i class="fas fa-heart"></i>
      </span>
      </footer>`;
      
      let myTweet = $tweet.append(tweetHTML);
      return myTweet;
    }
    
    // Render the tweets in a loop so they can be posted to the webpage
    const tweetRendering = function(tweetArr) {
      for (const tweet of tweetArr) {
        const $tweet = createTweetElement(tweet);
        $('.tweets').prepend($tweet);
      }
    }
    tweetRendering(tweetData);

    });
  