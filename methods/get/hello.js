var Method = require('aeolus').Method;

var hello = new Method();

hello.handle(function(request, response) {
  response.respondPlainText("Performed GET on /hello");
});

module.exports = hello;
