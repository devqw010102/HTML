// let season = ['봄', '여름', '가을', '겨울'];
// console.log(season);

// let name;
// let mathScore;
// let korScore;
// let engScore;

// let student = [
//     {name : "hong", mathScore : 80, korScore : 70, engScore : 67},
//     {name : "sung", mathScore : 88, korScore : 72, engScore : 64},
//     {name : "lee", mathScore : 83, korScore : 78, engScore : 64}
// ];
// console.log(student);


let korScore = [77, 92, 65, 81, 53];

//  A학교 국어점수 총합
    let sum = 0;
    for(let i = 0; i < korScore.length; i++) {
        sum += korScore[i];
    }
    console.log(`Sum = ${sum}`);

//  A학교 국어점수 평균
    console.log(`Avg = ${sum / korScore.length}`);