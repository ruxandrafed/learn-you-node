var http = require('http');
var url = process.argv[2];

var collector = [];

http.get(url, function httpGetCallback(response) {
  response.setEncoding('utf8');
  response.on('error', console.error);
  response.on('data', function(input) {
    collector.push(input);
  });
  response.on('end', function() {
    console.log(collector.join("").length);
    console.log(collector.join(""));
  });
});


// var http = require('http')
// var bl = require('bl')

// http.get(process.argv[2], function (response) {
//   response.pipe(bl(function (err, data) {
//     if (err)
//       return console.error(err)
//     data = data.toString()
//     console.log(data.length)
//     console.log(data)
//   }))
// })
