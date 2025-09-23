// 학생점수배열[87, 92, 76, 81, 95, 100, 68]이 있다. 
// 최고점수, 최저점수, 평균 점수를 구하시오. 
// 평균 점수는 소수점 둘째 자리까지 반올림 하세요.

let scores = [87, 92, 76, 81, 95, 100, 68];
let sum = 0;

let maxScore = Math.max(...scores);
let minScore = Math.min(...scores);

scores.forEach(element => {
    sum += element
});

document.write(`최고 점수 : ${maxScore} <br>
                최저 점수 : ${minScore} <br>
                평균 점수 : ${(sum / scores.length).toFixed(2)}`);