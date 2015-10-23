var input = process.argv;

function test (input) {
  var total = 0;

  for (var i = 2; i < input.length; i++) {
    total += +input[i];
  }

  return total;
}

console.log(test(input));


=========================

var total = input.reduce(function (acc, i) {
  return acc += +i;
}, 0);