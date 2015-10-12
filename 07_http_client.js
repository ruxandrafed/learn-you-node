var http = require('http');
var url = process.argv[2];

http.get(url, function httpGetCallback(response) {
  // console.log("Got response: " + response.statusCode);
  response.setEncoding('utf8');
  response.on('error', console.error);
  response.on('data', console.log);
});