console.log("--------Number-------")

console.log(Number('123'));     // 123
console.log(Number('123.45'));  // 123.45
console.log(Number('123ABC'));  // Not a number

console.log("--------ParseInt-------")

console.log(parseInt('123'));       // 123
console.log(parseInt('123.45'));    // 123
console.log(parseInt('123ABC'));    // 123

console.log("--------ParseFloat-------")

console.log(parseFloat('123'));         // 123
console.log(parseFloat('123.45'));      // 123.45
console.log(parseFloat('123ABC'));      // 123

console.log("--------String-------")

console.log(String(123));               // '123'
console.log(String('123ABC'));          // '123ABC'
console.log(String(true));              // 'true'

console.log("--------Boolean-------")

console.log(Boolean(1));        // true
console.log(Boolean(0));        // false
console.log(Boolean('ABC'));    // true
console.log(Boolean(''));       // false
