
document.addEventListener('DOMContentLoaded', () => {
    let btn = document.querySelector("#btn");
    btn.addEventListener('click', (event) => {
        event.preventDefault();
        idCheck();
        pwdCheck();
        emailCheck();
    })
})

idCheck = () => {
    let regex = /^[a-zA-Z]/;
    let id = document.querySelector("#id");
    
    if(!regex.test(id.value)) {
        let idmsg = document.querySelector("#idmsg");
        idmsg.textContent = "id는 영문자";
        idmsg.style.color = "red";    
    }
    else {
        idmsg.textContent = "";
    }
}

pwdCheck = () => {
    let regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,12}$/;
    let pwd = document.querySelector("#pwd");

    if(!regex.test(pwd.value)) {
        let pwdmsg = document.querySelector("#pwdmsg");
        pwdmsg.textContent = "비밀번호는 6자리에서 12자리, 영문자, 숫자, 특수문자를 조합해야함"
        pwdmsg.style.color = "red";
    }
    else {
        pwdmsg.textContent = "";
    }
}

emailCheck = () => {
    let regex = /^[\w.-]+@[\w.-]+\.[A-Za-z]{2,}$/;
    let email = document.querySelector("#email");

    if(!regex.test(email.value)) {
        let emailmsg = document.querySelector("#emailmsg");
        emailmsg.textContent = "이메일 양식이 아닙니다."
        emailmsg.style.color = "red";
    }
    else {
        emailmsg.textContent = "";
    }
}