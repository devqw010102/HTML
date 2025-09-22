let scores = [95, 40, 67, 88, 100, 52, 73];
let grade = [];
let pass = scores.length;
let sum = 0;
/* 
    100 ~ 91 : A
    90 ~ 81 : B
    80 ~ 70 : C
    70 ~ 61 : D
    ~ 60 : F

    F는 불합격
*/

scores.forEach(s => {
    if(s > 90) 
        grade.push("A");
    else if(s > 80) 
        grade.push("B");
    else if(s > 70) 
        grade.push("C");
    else if(s > 60)
        grade.push("D");
    else {
        grade.push("F");
        pass--;
    }
    sum += s;
});

for(let i = 0; i < scores.length; i++) {
    document.write(`${i + 1}번 학생 ${grade[i]}등급<br>`);
}
document.write(`평균 : ${sum / (scores.length)}, 합격자 수 : ${pass}`);
