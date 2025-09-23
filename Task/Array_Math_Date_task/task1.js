let scores = [87, 92, 76, 81, 95];
let sum = 0;

scores.forEach(e => {
    sum += e;
});

let now = new Date();
let gradeAnnouncementDate = new Date("2025-09-30");

document.write(`평균 : ${sum / scores.length}<br> 성적 발표일 : ${gradeAnnouncementDate}`);
