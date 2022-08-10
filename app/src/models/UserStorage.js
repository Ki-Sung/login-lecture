// 자바스크립트 파일 생성 시 맨 상단에 이크마스크립트를 준수하겠다는 내용을 기재한다. 꼭!
"use strict";

// const { use } = require("../routes/home");

// users.json(테이블)을 불러오기 위해 파일 시스템 만들기 
const fs = require("fs").promises;

// 클래스를 만들 떄 파일이름과 동일하게 하면 좋다. 
class UserStorage {
    static #getUserInfo(data, id) {
        const users = JSON.parse(data);
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users); // [id, password, name]
        const userInfo = usersKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});
        
        return userInfo;
    };

    static #getUsers(data, fields) {
        const users = JSON.parse(data);
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    };

    // 외부에서 로그인 기능을 위한 로그인 로직처리를 위한 메서드
    static getUsers(...fields) {
        return fs
        .readFile("./src/database/users.json")
        .then((data) => {
            return this.#getUsers(data, fields);
        })
        .catch(console.error);
    };

    // User 모델과 연결
    static getUserInfo(id) {
        return fs
        .readFile("./src/database/users.json")
        .then((data) => {
            return this.#getUserInfo(data, id);
        })
        .catch(console.error);
    };

    static save(userInfo) {
        const users = this.getUsers("id", "password", "id");
        console.log(users);
        // 데이터 추가
        fs.writeFile("./src/database/users.json", users);
    };

};

module.exports = UserStorage;