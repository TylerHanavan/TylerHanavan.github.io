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
      $('#progress').css('display', 'hidden');
      $('#fuck-off').css('display', 'block');
    }
  }, 100);
});
