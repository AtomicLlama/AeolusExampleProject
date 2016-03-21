var Method = require('Aeolus').Method;

var user = new Method();

user.handle(function(request, response) {
  var name = request.getParameter("id");
  response.respondPlainText("Hello, " + name);
});

module.exports = user;
