// 자바스크립트 파일 생성 시 맨 상단에 이크마스크립트를 준수하겠다는 내용을 기재한다. 꼭!
"use strict";

// const { use } = require("../routes/home");

// DB를 불러오기 위해 데이터베이스 연결 시스템 만들기 
const db = require("../config/db");

// 클래스를 만들 떄 파일이름과 동일하게 하면 좋다. 
class UserStorage {
    // User 모델과 연결
    static getUserInfo(id) {
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM users WHERE id = ?;";
            db.query(query, [id], (err, data) => {
                if (err) reject(`${err}`);
                resolve(data[0]);
            });
        });
    };

    static async save(userInfo) {
        return new Promise((resolve, reject) => {
            const query = "INSERT INTO users(id, name, password) VALUES(?, ?, ?);";
            db.query(
                query, 
                [userInfo.id, userInfo.name, userInfo.password], 
                (err) => {
                if (err) reject(`${err}`);
                resolve({ success: true });
            });
        });
    };

};

module.exports = UserStorage;