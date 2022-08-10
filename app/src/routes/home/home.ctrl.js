// 자바스크립트 파일 생성 시 맨 상단에 이크마스크립트를 준수하겠다는 내용을 기재한다. 꼭!
"use strict";

// Users 모델 불러오기 
const User = require("../../models/User");

const output = {
    // home 컨트롤러
    home: (req, res) => {
    res.render("home/index");
    },

    // 로그인 컨트롤러 
    login: (req, res) => {
    res.render("home/login");
    },

    // 회원가입 컨트롤러
    register: (req, res) => {
    res.render("home/register");
    }
};

const process = {
    login: async (req, res) => {
        const user = new User(req.body);
        const response = await user.login();
        return res.json(response);
    },
    register: async (req, res) => {
        const user = new User(req.body);
        const response = await user.register();
        return res.json(response);
    },
};

// index.js에서 사용할 수 있게 모듈을 바깥으로 뺴주기 
module.exports = {
    output,
    process
}; 