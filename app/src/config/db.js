// mysql와 연결 
const mysql = require("mysql");

// DB 연결 
const db = mysql.createConnection({
    // AWS RDS에 있는 엔드포인트 
    host: process.env.DB_HOST,
    // DB 아이디 
    user: process.env.DB_USER,
    // DB 비밀번호 
    password: process.env.DB_PASSWORD,
    // AWS RDS에서 만든 DB 명 
    database: process.env.DB_DATABASE,

});

// DB 연결 요청 
db.connect();

// DB라는 모듈을 외부에서 사용할 수 있도록 설정 
module.exports = db;
