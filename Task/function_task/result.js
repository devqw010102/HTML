// 1. 두 수를 더하기하는 addNumbers 함수 선언하기
function addNumbers(a, b) {
    return a + b;
}
console.log(addNumbers(3, 5)); 

// 2. 문자열의 길이 구하는 getLength 함수 선언하기
function getLength(str) {
    return str.length;
}
console.log(getLength("JavaScript")); 

// 3. 인수값을 입력하면 그 값의 홀수/짝수 판별하는 checkOddEven 함수 선언하기
function checkOddEven(number) {
    if(number % 2 == 0)
        return "짝수"
    else 
        return "홀수"
}
console.log(checkOddEven(7)); 

// 4. 배열의 합을 구하는 sumArray 함수 선언하기
function sumArray(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
} 
console.log(sumArray([1, 2, 3, 4, 5]));

// 5. 구구단에서 단을 입력하면 해당되는 단의 함수선언하기
function gugudan(n) {
    for(let i = 1; i < 10; i++) {
        document.write(`${n} X ${i} = ${n * i}<br>`);
    }
}
gugudan(3);