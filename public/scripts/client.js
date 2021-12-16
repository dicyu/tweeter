/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() {
  
    // Escape function to prevent scripts being passed in as a tweet
    const escapeMe = function (str) {
      let div = document.createElement('div');
      div.appendChild(document.createTextNode(str));
      return div.innerHTML;
    };

    // Function to add a tweet into the database using append
      const createTweetElement = function(newTweet) {
      const $tweet = $('<article>').addClass("tweet");
      
      // HTML container for the new tweet
      const tweetHTML = `
      <header>
        <img src="${newTweet.user.avatars}">
        <h4>${newTweet.user.name}</h4>
        <span class="handle">${newTweet.user.handle}</span>
      </header>
      <article class="inner-tweets">
        <p>${escapeMe(newTweet.content.text)}</p>
      </article>
      <footer class="tweet-footer">
        ${timeago.format(newTweet['created_at'])}
      <span>
        <i class="fas fa-flag"></i>
        <i class="fas fa-retweet"></i>
        <i class="fas fa-heart"></i>
      </span>
      </footer>`;
      
      $tweet.append(tweetHTML);
      return $tweet;
    }
    

    // Render the tweets in a loop so they can be posted to the webpage
    const tweetRendering = function(tweetArr) {
      for (const tweet of tweetArr) {
        const $tweet = createTweetElement(tweet);
        $('.tweets').prepend($tweet);
      }
    }

    // Loading tweets, using ajax request to get our data from our file
    const loadTweets = function() {
      $.ajax('/tweets', { method: 'GET'})
      .then(function (tweets) {
        tweetRendering(tweets)
        console.log('working?');
      })
    };
    loadTweets();

    // Error message hiding spot
    const $errorMessage = $('form').children('h4');
    $errorMessage.hide();

    // To prevent the form from submitting normally
    $('form').submit(function(event) {
      event.preventDefault();
        
        const newTweet = $('textarea').serialize();
        const newTweetLength = $('textarea').serialize().length;
        const emptyTweet = $('textarea').val();
        const tweetLength = 140;
        
        if (newTweetLength > tweetLength) {
          $('.error').text('This tweet is too long. Your thoughts must be portrayed within 140 characters!');
          $errorMessage.slideDown(600);
          setTimeout(() => { $errorMessage.slideUp(600) }, 5000);
        } else if (emptyTweet === '') {
          $('.error').text('Empty? Did you mis-click...you can\'t tweet a empty thought!');
          $errorMessage.slideDown(600);
          setTimeout(() => { $errorMessage.slideUp(600) }, 5000);
        } else {
          console.log('Button clicked, performing ajax call...');
          
          $.post(
            '/tweets', 
            newTweet
            )
            .then(function() {
              $('textarea').val('');
              const $tweetContainer = $('.tweets');
              $tweetContainer.empty();
              loadTweets(newTweet);
              console.log("it worked")
            })
            
          }
          
        });
      });
  