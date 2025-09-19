let names = ["민수", "지영", "철수", "하나"];
let flag = 0;
for(let i = 0; i < names.length; i++) {
    if(names[i] == "철수")
        flag = 1;
}

if(flag) 
    document.write("찾음");
else
    document.write("없음");