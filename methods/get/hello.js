var Method = require('Aeolus').Method;

var hello = new Method();

hello.handle(function(request, response) {
  response.respondPlainText("Hello World!");
});

module.exports = hello;
