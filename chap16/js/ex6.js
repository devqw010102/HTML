/*
    이름 : 홍길동
    대면 면접 점수 : 70
    이력서 면접 점수 : 50
    자소서 면접 점수 : 50

    대면 면접 60점 이상, 서류 면접(이력서, 자소서)이 70점 이상이면 합격
*/

let name = 'hong';
let interview = 70;
let resume = 30;
let coverLetter = 35;

let passNot = ( (interview >= 60) && ( (resume + coverLetter) >= 70) );

passNot ? console.log("합격") : console.log("불합격");