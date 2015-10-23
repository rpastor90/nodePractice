var mymodule = require('./mymodule.js');

var ext = process.argv[3];
var dir = process.argv[2];

mymodule(dir, ext, function(err, data) {
  for (var i = 0; i < data.length; i++) {
    console.log(data[i]);
  }
});
