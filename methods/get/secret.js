var Method = require('Aeolus').Method;

var secret = new Method();

secret.handler = function(request,response) {
  response.respondPlainText("This is some super secret information!");
};

secret.needsAuth = true;

module.exports = secret;
