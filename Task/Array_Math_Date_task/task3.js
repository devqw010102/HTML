scores = [87, 92, 76, 81, 95, 100, 68];
let max = Number.MIN_SAFE_INTEGER;
let min = Number.MAX_SAFE_INTEGER;
let sum = 0;

for(let i = 0; i < scores.length; i++) {
    sum += scores[i];

    if(max < scores[i])
        max = scores[i];
    if(min > scores[i])
        min = scores[i];
}

document.write(`최고 점수 : ${max}, 최저 점수 : ${min}, 평균 점수 : ${(sum / scores.length).toFixed(2)}`);
