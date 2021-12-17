// DOM Loads
$(document).ready(() => {

  // Scroll check to see if we are at the top, if so, fade out scroll up button and fade in compose tweet
  $(window).scroll(function() {
    if ($(this).scrollTop() === 0) {
      $('#newTweet-container').fadeIn(200);
      $('.scroll-up').fadeOut(200);
    } else {
      // If window is scrolled, fade out compose tweet, fade in scroll up button
      $('#newTweet-container').fadeOut(200);
      $('.scroll-up').fadeIn(200);
    }
  });

  // Scroll up button, on click, animate scroll to the top
  $(".scroll-up").click(() => {
    $('html, body').animate({scrollTop:0}, 'slow');
    $("textarea").focus();
  });

});