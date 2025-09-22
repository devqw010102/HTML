let scores = [72, 91, 83, 65, 99];
let max = Number.MIN_SAFE_INTEGER;

for(let i = 0; i < scores.length; i++) {
    if(max < scores[i])
        max = scores[i];
}

document.write(max);