// 5. 구구단에서 단을 입력하면 해당되는 단의 함수선언하기
function gugudan(n) {
    for(let i = 1; i < 10; i++) {
        console.log(`${n} X ${i} = ${n * i}`);
    }
}

gugudan(3);
