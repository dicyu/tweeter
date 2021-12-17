// DOM Loads

$(document).ready(() => {

  $(window).scroll(function() {
    
    if($(this).scrollTop() === 0) {
      $('#newTweet-container').fadeIn(200);
      $('.scroll-up').fadeOut(200);
    } else {
      $('#newTweet-container').fadeOut(200);
      $('.scroll-up').fadeIn(200);
    }
  });

  $(".scroll-up").click(() => {
    $('html, body').animate({scrollTop:0}, 'slow');
    $("textarea").focus();
  });
})