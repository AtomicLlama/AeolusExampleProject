var Method = require('aeolus').Method;

var hello = new Method();

hello.handle(function(request, response) {
  var object = {
    message: "Performed PUT on /hello",
    data: request.getBody() || "No body on the request."
  };
  response.respondJSON(object);
});

module.exports = hello;
