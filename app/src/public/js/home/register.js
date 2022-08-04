// 자바스크립트 파일 생성 시 맨 상단에 이크마스크립트를 준수하겠다는 내용을 기재한다. 꼭!
"use strict";

// const { register } = require("../../../routes/home/home.ctrl");

const id = document.querySelector("#id"),
name = document.querySelector("#name"),
password = document.querySelector("#password"),
confirmPassword = document.querySelector("#confirm-password"),
registerBtn = document.querySelector("#button");

// 클릭이라는 이벤트를 발생시키면 로그인하기 
registerBtn.addEventListener("click", register);

// 위 두 번쨰 파라미터 register 함수 설정 
function register() {
    if (!id.value) return alert("아이디를 입력해주세요!");
    if (password.value !== confirmPassword.value) return alert("입력한 비밀번호와 일치하지 않습니다.");
    
    const req = {
        id: id.value,
        name: name.value,
        password: password.value,
    };

    fetch("/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(req),
    }).then((res) => res.json()) 
      .then((res) => {
        if (res.success) {
            location.href = "/login";
        } else {
            alert(res.msg);
        }
      })
      .catch((err) => {
        console.error(new Error("회원가입 중 에러 발생!"));
      });
}