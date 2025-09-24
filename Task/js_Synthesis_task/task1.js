let number = document.querySelector("#number");
let num;

plus = () => {
    num = number.value;
    number.value = ++num;
}
minus = () => {
    num = number.value;
    if(num > 1) {
        number.value = --num;
    }
}