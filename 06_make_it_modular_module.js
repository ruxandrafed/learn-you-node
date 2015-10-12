var fs = require('fs');
// var path = require('path');

module.exports = function filterStuff(path, filter, callback) {
    var regex = new RegExp("\\." + filter + "$");
    var matching = function (file) { return regex.test(file); };

    fs.readdir(path, function readDirCallback(err, list) {
      if (err) {
        return callback(err);
      }
      return callback(null, list.filter(matching));
    });
};


// module.exports = {
//   filterStuff: filterStuff,
//   someOthherStuff: function() {}
// }

// var stuff = require('module.js');

// stuff.filterStuff
