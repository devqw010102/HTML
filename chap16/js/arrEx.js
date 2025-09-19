// A반 학생의 국어점수를 korScore 배열에 저장해보자

let korScore = [70, 60, 55, 76, 23, 54, 99, 81, 77, 65];

// 10명의 학생들의 국어점수 총합
let sum = 0;

// sum = korScore[0] + korScore[1] + korScore[2] + korScore[3] + korScore[4] + 
//       korScore[5] + korScore[6] + korScore[7] + korScore[8] + korScore[9]

for(let i = 0; i < korScore.length; i++) {
    sum += korScore[i];
}
// console.log(`Sum = ${sum}`);

// 10명의 학생들의 국어점수 평균

let avg = sum / korScore.length;
// console.log(`Avg = ${avg}`);

document.write(`A반 학생들의 국어점수 총 합은 ${sum}이고, 평균은 ${avg}이다.`);
// document.write("A반 학생들의 국어점수 총 합은 " + sum + "이고, 평균은 " + avg + "이다.");
