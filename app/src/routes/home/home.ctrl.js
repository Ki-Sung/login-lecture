// 자바스크립트 파일 생성 시 맨 상단에 이크마스크립트를 준수하겠다는 내용을 기재한다. 꼭!
"use strict";

const output = {
    // home 컨트롤러
    home: (req, res) => {
    res.render("home/index");
    },

    // 로그인 컨트롤러 
    login: (req, res) => {
    res.render("home/login");
    },
};

const process = {
    login: (req, res) => {
        console.log(req.body);
    }
};

// index.js에서 사용할 수 있게 모듈을 바깥으로 뺴주기 
module.exports = {
    output,
    process
}; 