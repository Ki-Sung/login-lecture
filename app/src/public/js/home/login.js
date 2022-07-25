"use strict";

// const { login } = require("../../../routes/home/home.ctrl");

const id = document.querySelector("#id"),
password = document.querySelector("#password"),
loginBtn = document.querySelector("button");

// 클릭이라는 이벤트를 발생시키면 로그인하기 
loginBtn.addEventListener("click", login);

// 위 두 번쨰 파라미터 login 함수 설정 
function login() {
    const req = {
        id: id.value,
        password: password.value,
    };

    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(req),
    });
}