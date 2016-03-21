var Aeolus = require('Aeolus');

Aeolus.auth(function(user, pass, callback) {
  var isValid = user === "admin" && pass === "alpine";
  callback(isValid);
});

var port = process.env.PORT || 8080;

Aeolus.createServer(port);

console.log("Ready! Now visit http://localhost:" + port + "/ to see me running!");
