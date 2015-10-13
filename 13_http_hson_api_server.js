var http = require('http'),
    url = require('url'),
    port = process.argv[2];

var connect = function (request, response) {

  var parsed = url.parse(request.url, true),
    date = new Date(parsed.query.iso),
    result = '';

  if (/api\/parsetime/.test(request.url)) {

    result = {
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds()
    };

  } else if (/api\/unixtime/.test(request.url)) {

      result = {
          unixtime: date.getTime()
      };
  }

  response.writeHead(200, {
    'Content-Type': 'application/json'
  });

  return response.end(JSON.stringify(result));

};

http.createServer(connect).listen(port);


// function parsetime (time) {
//   return {
//     hour: time.getHours(),
//     minute: time.getMinutes(),
//     second: time.getSeconds()
//   }
// }

// function unixtime (time) {
//   return { unixtime : time.getTime() }
// }

// var server = http.createServer(function (req, res) {
//   var parsedUrl = url.parse(req.url, true)
//   var time = new Date(parsedUrl.query.iso)
//   var result

//   if (/^\/api\/parsetime/.test(req.url))
//     result = parsetime(time)
//   else if (/^\/api\/unixtime/.test(req.url))
//     result = unixtime(time)

//   if (result) {
//     res.writeHead(200, { 'Content-Type': 'application/json' })
//     res.end(JSON.stringify(result))
//   } else {
//     res.writeHead(404)
//     res.end()
//   }
// })
// server.listen(Number(process.argv[2]))
