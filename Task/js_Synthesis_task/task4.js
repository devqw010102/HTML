secondNum2.addEventListener('change', function() {
    let secondNum1 = document.getElementById("secondNum1");
    let secondNum2 = document.getElementById("secondNum2");
    let sum = document.getElementById("sum");
    
    sum.innerHTML = parseInt(secondNum1.value) * parseInt(secondNum2.value);
})

plusFunction = () => {
    let num1 = document.getElementById("firstNum1");
    let num2 = document.getElementById("firstNum2");
    let result = document.getElementById("firstResult");

    result.value = parseInt(num1.value) + parseInt(num2.value);
}

sumFunction = () => {
    let arr = [];
    let fruit = document.getElementsByName("fruit");

    for(let i = 0; i <fruit.length; i++) {
        if(fruit[i].checked == true) {
            arr.push(fruit[i].value);
        }
    }

    let sum = 0;

    arr.forEach(e => {
        sum += parseInt(e);
    });

    document.getElementById("sum2").textContent = sum;
}
