var Method = require('aeolus').Method;

var hello = new Method();

hello.handle(function(request, response) {
  response.respondPlainText("Hello World!");
});

module.exports = hello;
