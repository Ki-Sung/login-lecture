// 자바스크립트 파일 생성 시 맨 상단에 이크마스크립트를 준수하겠다는 내용을 기재한다. 꼭!
"use strict";

// 모듈 
// 1. express라는 모듈 불러오기
const express = require("express");
// 2. bdoy-parser 라는 모듈 불러오기 
const bodyParser = require("body-parser");
// 3. 환경변수 설정을 위햔 dotenv 불러오기 
const dotenv = require("dotenv");
// 4. 로그 관리를 위한 morgan 불러오기
const morgan = require("morgan");

const app = express();  // express를 실행시켜 app의 변수에 넣게 함
dotenv.config(); // config를 통해 dotenv 실행

// log.js에 설정한 모듈 불러오기 
const accessLogStream = require("./src/config/log");

// 라우팅
const home = require("./src/routes/home");

// 앱 세팅 
app.set("views", "./src/views");
app.set("view engine", "ejs");
// 미들웨어 등록 
app.use(express.static(`${__dirname}/src/public`));  // static을 통해 정적 경로 설정 
app.use(bodyParser.json());  // bodyParser를 json 데이터로 파싱할 수 있도록 설정 
// URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결 
app.use(bodyParser.urlencoded({ extended: true}));
// morgan 미들웨어 등록 
app.use(morgan("dev"));
app.use(morgan("common", { stream: accessLogStream }));
// index.js와 연결하기 
app.use("/", home); // use -> 미들웨어를 등록해주는 매서드 

// www.js의 접근을 위해 보내줌 
module.exports = app;