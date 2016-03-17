var Method = require('Aeolus').Method;

var google = new Method();

google.handler = function(request,response) {
  response.redirect("http://google.com");
};

google.needsAuth = false;

module.exports = google;
