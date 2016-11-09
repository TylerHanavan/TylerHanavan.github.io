var lime = new Lime();

lime.doRoute(new Route("data", "http://www.masspvp.com/test/request.php", s, a));

var request = lime.doRequest("data", {});

function s(data) {
  $("#test").val(data);
}

function a(a, b, c) {

}
