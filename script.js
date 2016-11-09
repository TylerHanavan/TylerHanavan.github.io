var lime = new Lime();

lime.doRoute(new LimeRoute("data", "http://www.masspvp.com/test/request.php", s, a));

var request = lime.doRequest("data", {});

function s(data) {
  $("#test").val(data);
}

function a(a, b, c) {

}
