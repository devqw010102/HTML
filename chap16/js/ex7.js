let a = 10;
let b = 20;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);

console.log(a % b);

console.log('-----------------------');

let c = a++;

console.log(a);
console.log(c);

a = 10;
c = ++a;

console.log(a);
console.log(c);

console.log('-----------------------');

a = 10;
c = a--;

console.log(a);
console.log(c);

a = 10;
c = --a;
console.log(a);
console.log(c);

console.log('-----------------------');

a = 10;
b = 0;

b = a + 10; // += 으로 치환 X

c = 20;
c = c + 20; // += 으로 치환 O

c = 20;
c %= 6;

console.log(c);

console.log('-----------------------');

console.log(3 == 3);    // true
console.log(3 == "3");  // true
console.log(3 === "3"); // false

console.log(3 != 3);    // false
console.log(3 != "3");  // false
console.log(3 !== "3"); // true

console.log('-----------------------');

