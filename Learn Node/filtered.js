var fs = require('fs');
var path = process.argv[2];
var type = process.argv[3];
fs.readdir(path, function(err, list) {
  for (i = 0; i < list.length; i++) {
    if (list[i].length > type.length && list[i].slice(-(type.length)) === type) {
      console.log(list[i]);
    }
  }
});

// model answer
// var fs = require('fs')
// var path = require('path')

// fs.readdir(process.argv[2], function (err, list) {
//   list.forEach(function (file) {
//     if (path.extname(file) === '.' + process.argv[3])
//       console.log(file)
//   })
// })

function balance (num, mths) {
  var output = [];
  var diff = [];
  for (var i = mths - 1; i > 0; i--) {
    if (i % 12 === 0) {
      num = +num * 1.07;
    }
    num = +num - (+num/i);
    output.push(num);
  }
  for (var i = 0; i < output.length - 1; i++) {
    diff.push(output[i + 1] - output[i]);
  }
  return diff;
}
