var fs = require('fs');
var path = require('path');

var directoryPath = process.argv[2];
var fileExtension = process.argv[3];
var regex = new RegExp("." + fileExtension + "$", "g");

fs.readdir(directoryPath, function (err, files) {
  if (err) throw err;
  for (i=0; i< files.length; i++) {
    if (regex.test(files[i])) {
      console.log(files[i]+"\n");
    }
  }
});
