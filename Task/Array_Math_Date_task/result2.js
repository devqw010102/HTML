// Math.random()을 이용해서 1 ~ 45 사이의숫자 중 
// 중복없는 6개 번호를 뽑아 배열로 만들고, 
// 정렬된 결과를 출력하시오.

let lotto = [];
do {
    let num = Math.floor((Math.random() * 45 + 1));
    if(!lotto.includes(num)) 
        lotto.push(num);
    
} while(lotto.length < 6);

lotto.sort((a, b) => a - b);  
document.write(lotto);