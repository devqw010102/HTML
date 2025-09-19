let scores = [72, 91, 83, 65, 99];
let temp = -1;


for(let i = 0; i < scores.length; i++) {
    if(temp < scores[i])
        temp = scores[i];
}

document.write(temp);
