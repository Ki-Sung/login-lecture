"use strict";

// app.js를 불러오기 
const app = require("../app");
// 포트 설정
const PORT = 3000;

// listen 이라는 명령어로 서버를 띄움 3000포트에 서버가 접속되면 아래의 결과를 나오게 함.
app.listen(PORT, () => {
    console.log("서버 가동");
});