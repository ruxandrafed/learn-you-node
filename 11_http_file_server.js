var fs = require('fs'),
    http = require('http'),
    port = process.argv[2],
    file = process.argv[3];

var server = http.createServer(function createHttpServerCallback(request, response) {
  response.writeHead(200, { 'content-type': 'text/plain' });
  return fs.createReadStream(file).pipe(response);
});

server.listen(Number(port);
