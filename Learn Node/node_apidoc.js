var input = process.argv;
var fs = require('fs');
var buf = fs.readFileSync(input[2]);
var str = String(buf);
var spli = str.split('\n');
console.log(spli.length - 1);
