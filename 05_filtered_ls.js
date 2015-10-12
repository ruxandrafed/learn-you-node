var fs = require('fs');
var path = require('path');

var regex = new RegExp('\.' + process.argv[3] + '$');

var matching = function(filename) {
  return regex.test(filename)
};

var printFiltered = function (err, arr) {
  arr.sort()
    .filter(matching)
    .forEach(function (filename) {
      console.log(filename);
    });
};

fs.readdir(process.argv[2], printFiltered);


// var fs = require('fs')
// var path = require('path')

// fs.readdir(process.argv[2], function (err, list) {
//   list.forEach(function (file) {
//     if (path.extname(file) === '.' + process.argv[3])
//       console.log(file)
//   })
// })


