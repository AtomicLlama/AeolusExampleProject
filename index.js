var Aeolus = require('Aeolus');

var port = process.env.PORT || 8080;

Aeolus.auth(function(user,pass) {
  return user === "root" && pass === "alpine";
});

Aeolus.createServer(port);
