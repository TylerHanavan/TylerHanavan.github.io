$(window).ready(function() {
  var width = 0;
  var wait = 0;
  setInterval(function() {
    if(wait == 0) {
      ++width;
      if(width > 100) {
        width = 0;
        wait = 1;
      }
      $('#progress').css('width', width + '%');
    } else {
      $('#progress-div').css('display', 'none');
      $('#progress').css('display', 'none');
      $('#status').html('<h2>Go fuck yourself</h2>');
    }
  }, 200);
});
