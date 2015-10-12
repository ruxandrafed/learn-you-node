process.argv.splice(0, 2);
var sum = process.argv.reduce(
  function(total, num){ return total + parseInt(num, 10) }
  , 0);
console.log(sum);


// var result = 0

// for (var i = 2; i < process.argv.length; i++)
//   result += Number(process.argv[i])

// console.log(result)
