// 자바스크립트 파일 생성 시 맨 상단에 이크마스크립트를 준수하겠다는 내용을 기재한다. 꼭!
"user strict";

const { response } = require("express");
// UserStorage로 접근하여 데이터 가져오기
const UserStorage = require("./UserStorage");

// 컨트롤러와 연결
class User{
    constructor(body) {
        this.body = body;
    };

    login() {
        const client = this.body;
        console.log(UserStorage.getUserInfo(client.id));
        
        // if (id) {
        //     if (id === client.id && password === client.password) {
        //         return { success: true }; // 위 조건이 성립되면 true
        //     };
        //     return { success: false, msg: "아이디 혹은 비밀번호가 틀렸습니다." }; // id와 password가 다르면 false
        // };
        // return { success: false, msg: "회원정보를 입력하지 않았거나 존재하지 않는 아이디입니다. 다시 입력해주세요." }; // 둘다 없는 경우 false
    };

    register() {
        const client = this.body;
        UserStorage.save(client);
        return response;
    };
};

module.exports = User;