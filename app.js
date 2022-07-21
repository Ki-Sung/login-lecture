// 자바스크립트 파일 생성 시 맨 상단에 이크마스크립트를 준수하겠다는 내용을 기재한다. 꼭!
"use strict";

// 모듈 
// 1. express라는 모듈 다운 받기 
const express = require("express");
// 2. express를 실행시켜 app의 변수에 넣게 함
const app = express();

// 라우팅
const home = require("./routes/home");

// 앱 세팅 
app.set("views", "./views");
app.set("view engine", "ejs");

// index.js와 연결하기 
app.use("/", home); // use -> 미들웨어를 등록해주는 매서드 

// www.js의 접근을 위해 보내줌 
module.exports = app;