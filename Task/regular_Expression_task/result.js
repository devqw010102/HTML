let id = document.querySelector("#id");
let pwd = document.querySelector("#pwd");
let email = document.querySelector("#email");

let regId = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,12}$/;
let regPwd = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,12}$/;
let regEmail = /^[\w.-]+@[\w.-]+\.[A-Za-z]{2,}$/;

let idmsg = document.querySelector("#idmsg");
let pwdmsg = document.querySelector("#pwdmsg");
let emailmsg = document.querySelector("#emailmsg");

let form = document.querySelector('form');


id.addEventListener('blur', validateId);
pwd.addEventListener('blur', validatePwd);
email.addEventListener('blur', validateEmail);

form.addEventListener("submit", function(event) {
    event.preventDefault();

    if(validateId() && validatePwd() && validateEmail()) {
        form.submit();
    }
})

function validateId(){
    if(regId.test(id.value)) {
        idmsg.textContent = "사용가능한 아이디";
        idmsg.style.color = "Green";
        return true;
    }
    else {
        idmsg.textContent = "아이디는 영문자, 숫자 조합 6 ~ 12자 이내";
        idmsg.style.color = "red";
        return false;
    }
}

function validatePwd() {
    if(regPwd.test(pwd.value)) {
        pwdmsg.textContent = "사용가능한 비밀번호";
        pwdmsg.style.color = "Green";
        return true;
    }
    else {
        pwdmsg.textContent = "비밀번호는 영문자, 숫자, 특수문자 조합 6 ~ 12자 이내";
        pwdmsg.style.color = "red";
        return false;
    }
}

function validateEmail() {
    if(regEmail.test(email.value)) {
        emailmsg.textContent = "사용가능한 이메일";
        emailmsg.style.color = "Green";
        return true;
    }
    else {
        emailmsg.textContent = "이메일 양식이 아님";
        emailmsg.style.color = "red";
        return false;
    }
}