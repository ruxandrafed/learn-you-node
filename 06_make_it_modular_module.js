var fs = require('fs');
var path = require('path');

module.exports = function (path, filter, callback) {
    var regex = new RegExp("\\." + filter + "$");
    var matching = function (file) { return regex.test(file); };

    fs.readdir(path, function (err, list) {
      if (err) {
        return callback(err);
      }
      return callback(null, list.filter(matching));
    });
};
