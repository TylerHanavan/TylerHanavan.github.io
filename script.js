var width = 0;
setInterval(function() {
  ++width;
  if(width > 100) {
    width -= 99;
  }
  $('#progress').css('width', width + '%');
}, 50);
