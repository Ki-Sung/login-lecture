// 자바스크립트 파일 생성 시 맨 상단에 이크마스크립트를 준수하겠다는 내용을 기재한다. 꼭!
"use strict";

const { use } = require("../routes/home");

// 클래스를 만들 떄 파일이름과 동일하게 하면 좋다. 
class UserStorage {
    static #users = {
        id: ["kcs4912" , "flycode77", "jihyun"],
        password: ["1234", "12345", "123456"],
        name: ["김기성", "정현석", "김지현"],
    };

    // 외부에서 로그인 기능을 위한 로그인 로직처리를 위한 메서드
    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }
}

module.exports = UserStorage;