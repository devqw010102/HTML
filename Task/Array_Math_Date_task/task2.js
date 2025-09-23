let lotto = [];
do {
    let num = Math.floor((Math.random() * 44 + 1));
    let flag = false;   // false : 중복 없음
    for(let i = 0; i < lotto.length; i++) {
        let e = num;
        if(lotto.includes(e)) {
            flag = true;    // flag : true => 중복 있음
            break;
        }
    } 

    if(!flag) {
        lotto.push(num);
    }
    if(lotto.length == 6)
        break;
}while(true);

lotto.sort(function (a, b) {
    return a - b;
});
document.write(lotto);