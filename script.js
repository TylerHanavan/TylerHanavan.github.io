var lime = new Lime();

lime.addRoute(new LimeRoute("data", "request.html", s, a));

var request = lime.doRequest("data", {});

function s(response) {
  $("#test").val(response.data);
}

function a(a, b, c) {

}
