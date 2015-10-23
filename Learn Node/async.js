var input = process.argv[2];
var fs = require('fs');
fs.readFile(input, 'utf8', function callback (err, data) {
  var lines = data.split('\n');
  console.log(lines.length - 1);
});
