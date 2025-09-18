/* 
    1. 필기시험이 60점 이상이면 "실기시험 응시가능"

    2. 필기시험이 60점 이상이면 "실기시험 응시가능", 그렇지 않으면 "실기시험 응시불가능"

    3. 시험점수가 400점 이상이면 "A등급", 시험점수가 300점 이상이면 "B등급"
        시험점수가 200점 이상이면 "C등급", 그렇지 않으면 "불합격"
    
    4. 필기시험이 60점 이상이고, 실기시험이 70점 이상이면 "합격", 그렇지 않으면 "불합격"


*/

console.log("Q1");
let test1 = parseInt(prompt("Q1 필기시험"));

if(test1 >= 60)
    console.log("실기시험응시가능");

console.log("Q2");
test1 >= 60 ? console.log("실기시험응시가능") : console.log("실기시험응시불가능");

console.log("Q3");
let test2 = parseInt(prompt("Q3 시험점수"));
if(test2 >= 400) 
    console.log("A등급");
else if(test2 >= 300)
    console.log("B등급");
else if(test2 >= 200)
    console.log("C등급");
else 
    console.log("불합격");

console.log("Q4");
let test3 = parseInt(prompt("Q4 실기시험"));
(test1 >= 60) && (test3 >= 70) ? console.log("합격") : console.log("불합격");

console.log("------------변수----------");
console.log(`필기시험 : ${test1}, 시험점수 : ${test2}, 실기시험 : ${test3}`);