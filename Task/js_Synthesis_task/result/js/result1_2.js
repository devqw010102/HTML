let number = document.querySelector("#number");

addMinus = (op) => {
    if(op == '+') 
        ++number.value;
    else if(op == '-' && number.value != 1) {
        --number.value;
    }

}