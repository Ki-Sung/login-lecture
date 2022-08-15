// 파일 시스템 모듈 불러오기
const fs = require("fs");
// 루트 경로를 가져와 주는 모듈 불러오기 
const appRoot = require("app-root-path");

// stream 모듈 설정 
const accessLogStream = fs.createWriteStream(
    `${appRoot}/log/access.log`, 
    { flags: 'a' }
);

// 설정된 모듈 밖으로 빼기 
module.exports = accessLogStream;