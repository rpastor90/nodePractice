var fs = require('fs');
var path = require('path');
var output = [];

module.exports = function (directory, filter, callback) {
  fs.readdir(directory, function (err, files) {
    if (err) {
      return callback(err);
    } else { 
      files.forEach(function(file) {
        if (path.extname(file) === "." + filter) {
          output.push(file);
        }
      });
    }
    return callback(err, output);
  });
};
