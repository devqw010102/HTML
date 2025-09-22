let arr = [5, 1, 9, 3, 7];

let minNum = Number.MAX_SAFE_INTEGER;
let maxNum = Number.MIN_SAFE_INTEGER;

console.log(minNum);
console.log(maxNum);

for(let i = 0; i < arr.length; i++) {
    if(arr[i] < minNum) 
        minNum = arr[i];
    if(arr[i] > maxNum)
        maxNum = arr[i];
}

document.write(`최댓값 : ${maxNum}, 최솟값 : ${minNum}`);

