let number = document.querySelector("#number");

plus = () => ++number.value;
minus = () => {
    if(number.value != 1) 
        --number.value;
}