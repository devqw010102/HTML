let btnAdd = document.querySelector("#add");
let btnMinus = document.querySelector("#minus");
let number = document.querySelector("#number");

btnAdd.addEventListener('click', function() {
    ++number.value;
})
btnMinus.addEventListener('click', function() {
    if(number.value != 1) {
        --number.value;
    }
})