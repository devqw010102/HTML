let hobby = document.querySelectorAll("input[type=checkbox]");
let btn = document.querySelector("input[type=button]");
let result = document.querySelector("#result");

btn.addEventListener('click', function() {
    result.innerHTML = "";
    for(let i = 0; i < hobby.length; i++) {
        if(hobby[i].checked) {
            result.innerHTML += "<h1>" + hobby[i].value + "</h1>";
        }
    }
})