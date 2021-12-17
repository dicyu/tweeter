// DOM Load
$(document).ready(function() {

  // Character counter
  $('textarea').on('input', function() {
    const tweetLimit = 140;
    let tweetLength = $(this).val().length;
    let characterCounter = $(this).siblings('.counter');

    // Tweet length check
    if (tweetLength > tweetLimit) {
      characterCounter.addClass('tweetTooLong');
    } else if (tweetLength <= tweetLimit) {
      characterCounter.removeClass('tweetTooLong');
    }
    // Character counter update everytime you type
    characterCounter.text(tweetLimit - tweetLength);
  });
});