$(window).ready(function() {
  var width = 0;
  var wait = 0;
  setInterval(function() {
    if(wait == 0) {
      ++width;
      if(width > 100) {
        width -= 99;
        wait = 50;
      }
      $('#progress').css('width', width + '%');
    } else {
      wait--;
    }
  }, 100);
});
