// 4. 배열의 합을 구하는 sumArray 함수 선언하기
function sumArray(arr) {
    let sum = 0;
    arr.forEach(e => {
        sum += e;
    });

    return sum;
}
 
console.log(sumArray([1, 2, 3, 4, 5]));