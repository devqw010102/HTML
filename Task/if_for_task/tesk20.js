let scores = [95, 40, 67, 88, 100, 52, 73];
let grade = [];
let pass = 0;
let sum = 0;
/* 
    100 ~ 80 : A
    80 ~ 60 : B
    60 ~ 40 : C
    40 ~ : F

    C, F는 불합격
*/

for(let i = 0; i < scores.length; i++) {
    if(scores[i] >= 80) {
        grade[i] = "A"
        pass++;
    }
    else if(scores[i] >= 60) {
        grade[i] = "B";
        pass++;
    }
    else if(scores[i] >= 40) {
        grade[i] = "C";
    }
    else {
        grade[i] = "F"
    }
    sum += scores[i];
}



for(let i = 0; i < scores.length; i++) {
    document.write(`${i + 1}번 학생 ${grade[i]}등급<br>`);
}
document.write(`평균 : ${sum / (scores.length + 1)}, 합격자 수 : ${pass}`);