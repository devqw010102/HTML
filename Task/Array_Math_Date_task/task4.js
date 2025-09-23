let birth = new Date(1999, 11, 2);
let now = new Date();
// 12월 2일

let toNow = now.getTime();
let toBirth = birth.getTime();
let remain = toNow - toBirth;

remain = Math.round(remain / (1000 * 60 * 60 * 24));
// let dDay = Math.round(remain);

if(birth.getMonth > now.getMonth) {
    document.write(remain % 365);
}
else 
    document.write(365 - remain % 365);

