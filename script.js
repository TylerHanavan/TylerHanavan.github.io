var lime = new Lime();

lime.addRoute(new LimeRoute("data", "request.html", s, a));

var request = lime.doRequest("data", {});

function s(data) {
  $("#test").val(data);
}

function a(a, b, c) {

}
