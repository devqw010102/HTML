/* 
    변수 스코프, 지역 변수, 전역 변수
*/

// error1) sum 변수는 for문 안에서만
// for(let i = 0; i < 6; i++) {
//     let sum = 0;
//     sum += i;
//     document.write(i + "<br>");
// }
// console.log(sum);       

// error2) i 변수는 for문 안에서만
// let sum = 0;
// for(let i = 0; i < 6; i++) {
//     sum += i;
// }
// document.write(i + "<br>");
// document.write(sum + "<br>");


// 1번 방법
let sum = 0;
for(let i = 0; i < 6; i++) {
    sum += i;
    document.write(i + "<br>");
}
document.write(sum + "<br>");

// 2번 방법
let sum2 = 0;
let i2 = 0;

for(i2; i2 < 6; i2++) {
    sum2 += i2;
}
document.write(i2 + "<br>");
document.write(sum2 + "<br>");