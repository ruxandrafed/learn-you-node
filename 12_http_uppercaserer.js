var http = require('http'),
    port = process.argv[2],
    map = require('through2-map');

var upcase = function (chunk) {
  return chunk.toString().toUpperCase();
};

var server = http.createServer(function createHttpServerCallback(request, response) {
  if (request.method === 'POST') {
    return request.pipe(map(upcase)).pipe(response);
  }
});

server.listen(port);


// var http = require('http')
// var map = require('through2-map')

// var server = http.createServer(function (req, res) {
//   if (req.method != 'POST')
//     return res.end('send me a POST\n')

//   req.pipe(map(function (chunk) {
//     return chunk.toString().toUpperCase()
//   })).pipe(res)
// })

// server.listen(Number(process.argv[2]))
