var Method = require('Aeolus').Method;

var hello = new Method();

hello.handler = function(request,response) {
  response.respondPlainText("Hello World! This is a smart Response");
};

hello.needsAuth = false;

module.exports = hello;
