// DOM Load

$(document).ready(function() {

  $('textarea').on('input', function() {

    const tweetLimit = 140;
    let tweetLength = $(this).val().length;
    let characterCounter = $(this).siblings('.counter');

    if (tweetLength > tweetLimit) {
      characterCounter.addClass('tweetTooLong');
    } else if (tweetLength <= tweetLimit) {
      characterCounter.removeClass('tweetTooLong');
    }
    characterCounter.text(tweetLimit - tweetLength);
  });

});