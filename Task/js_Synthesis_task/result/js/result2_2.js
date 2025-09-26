

getResult = () => {
    let arr = [];
    let hobby = document.getElementsByName("hobby");

    for(let i = 0; i < hobby.length; i++) {
        if(hobby[i].checked) {
            arr.push(hobby[i].value);  
        }
    }
    document.getElementById("result").textContent = arr;
}
