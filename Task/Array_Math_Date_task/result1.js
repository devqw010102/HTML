// 학생 점수 배열에서 평균을 구하고, 
// 오늘 날짜 기준으로 성적 발표일(일주일 뒤)을 출력하라.

let scores = [87, 92, 76, 81, 95];
let sum = 0;

scores.forEach(e => {
    sum += e;
});

// 오늘 기준으로 7일
let now = new Date();
now.setDate(now.getDate() + 7);
document.write(`평균 : ${sum / scores.length}<br> 성적 발표일 : ${now}`);