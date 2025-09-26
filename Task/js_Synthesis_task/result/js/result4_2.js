// 1. +연산
let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");
let result = document.querySelector("#result");
let btnAdd = document.querySelector("#btnAdd");

btnAdd.addEventListener('click', () => result.value = parseInt(num1.value) + parseInt(num2.value));

// 2. 총합 구하기
let price = document.querySelector("#price");
let quantity = document.querySelector("#quantity");
let total = document.querySelector("#total");

quantity.addEventListener('change', () => total.innerHTML = price.value * quantity.value)

// 3. 총합 구하기2(선택된 값만)

let fruit = document.querySelectorAll("input[name=fruit]");
let btnSum = document.querySelector("#btnSum");
let selectedSum = document.querySelector("#selectedSum");

btnSum.addEventListener('click', () => {
    let sum = 0;
    for(let i = 0; i < fruit.length; i++) {
        if(fruit[i].checked)
            sum += parseInt(fruit[i].value);
    }
    selectedSum.innerHTML = sum;
})
