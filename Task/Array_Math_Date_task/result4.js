// 생일을 new Date(1999, 11, 2)로 저장해두었다. 
// 올해 생일까지 며칠 남았는지 계산하시오. 
// 이미 지났으면 내년 생일까지 계산합니다.

let birth = new Date(1999, 11, 2);
let now = new Date();

// 2025-11-02 - 2025-09-24 => D-day
birth = new Date(now.getFullYear(), 11, 2);

let diff = birth - now;
diff = Math.ceil(diff / (60 * 60 * 1000 * 24));

console.log(`생일까지 남은 날 : ${diff}`);