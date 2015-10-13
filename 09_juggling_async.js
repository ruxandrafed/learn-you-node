var http = require('http'),
    urls = process.argv.slice(2),
    results = {},
    count = 0;


var print = function (results) {

  for (var i = 0; i < 3; ++i) {
    console.log(results[i]);
  }
};


var task = function (i) {

  http.get(urls[i], function (response) {

    var data = '';
    response.setEncoding('utf8');
    response.on('error', console.error);
    response.on('data', function (d) {
      data += d;
    });
    response.on('end', function () {
      results[i] = data;
      count += 1;
      if (count === 3) {
        print(results);
      }
    });
  });
};


for (var i = 0; i < 3; ++i) {
  task(i);
}

// var http = require('http')
// var bl = require('bl')
// var results = []
// var count = 0

// function printResults () {
//   for (var i = 0; i < 3; i++)
//     console.log(results[i])
// }

// function httpGet (index) {
//   http.get(process.argv[2 + index], function (response) {
//     response.pipe(bl(function (err, data) {
//       if (err)
//         return console.error(err)

//       results[index] = data.toString()
//       count++

//       if (count == 3)
//         printResults()
//     }))
//   })
// }

// for (var i = 0; i < 3; i++)
//   httpGet(i)
