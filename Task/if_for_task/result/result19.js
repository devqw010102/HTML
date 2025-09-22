let arr = [1, 2, 2, 3, 4, 4, 5, 1, 3];
let unique = []


for(let i = 0; i < arr.length; i++) {
    let flag = false;
    
    for(let j = 0; j < unique.length; j++) {
        if(arr[i] == unique[j]) {
            flag = true; break;
        }
    }

    if(!flag) {
        unique.push(arr[i]);
    }
}
document.write(unique);