// 자바스크립트 파일 생성 시 맨 상단에 이크마스크립트를 준수하겠다는 내용을 기재한다. 꼭!
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
    }).then((res) => res.json()) 
      .then((res) => {
        if (res.success) {
            location.href = "/";
        } else {
            alert(res.msg);
        }
      })
      .catch((err) => {
        console.error(new Error("로그인중 에러 발생!"));
      });
}