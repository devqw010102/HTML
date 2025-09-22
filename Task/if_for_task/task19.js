let arr = [1, 2, 2, 3, 4, 4, 5, 1, 3];
let temp = []

for(let i = 0; i < arr.length; i++) {
    let element = arr[i];
    if(!temp.includes(element)) 
        temp.push(element);
}

temp.forEach(element => {
    document.write(element + " ");
});