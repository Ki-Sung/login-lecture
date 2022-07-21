// 자바스크립트 파일 생성 시 맨 상단에 이크마스크립트를 준수하겠다는 내용을 기재한다. 꼭!
"use strict";

// app.js와 연결하기 
const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl")

// 서버 루트 경로 만들기 
router.get("/", ctrl.home);

// 로그인 경로 만들기 
router.get("/login", ctrl.login);

// 해당파일을 외부에 사용할 수 있도록 하기 
module.exports = router;