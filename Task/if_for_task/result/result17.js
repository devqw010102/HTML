let nums = [1, 2, 3, 4, 5];
let newNums = [];
for(let i = 0; i < nums.length; i++) {
    newNums[i] = Math.pow(nums[i], 2);
}


newNums.forEach(i => {
    document.write(i + " ");
});