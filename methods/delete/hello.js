var Method = require('aeolus').Method;

var hello = new Method();

hello.handle(function(request, response) {
  response.respondPlainText("Performed DELETE on /hello");
});

// This Method requires Authentication

hello.setHasAuth(true);

module.exports = hello;
