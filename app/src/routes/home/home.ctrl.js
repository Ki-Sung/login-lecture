// 자바스크립트 파일 생성 시 맨 상단에 이크마스크립트를 준수하겠다는 내용을 기재한다. 꼭!
"use strict";

const users = {
    id: ["kcs4912" , "flycode77", "jihyun"],
    password: ["1234", "12345", "123456"]
};

const output = {
    // home 컨트롤러
    home: (req, res) => {
    res.render("home/index");
    },

    // 로그인 컨트롤러 
    login: (req, res) => {
    res.render("home/login");
    },
};

const process = {
    login: (req, res) => {
        // id와 password 프론트에서 받아오기
        const id = req.body.id,
        password = req.body.password;
        
        // id, password 검증하기 
        // 프론트엔드에서 전달한 id가 user의 id에 있으면, users에 indexOF를 사용해서 id 인덱스를 가져오도록 하기
        if (users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            // user.password[idx]가 프론트엔드에서 전달한 password와 같은지 여부 확인
            if (users.password[idx] === password) {
                // 만약 같으면 성공여부 응답
                return res.json({
                    success: true,
                }); 
            }
        }
        // 실패 했다면 실패로 나타내주기 
        return res.json({
            success: false,
            msg: "아이디 또는 비밀번호를 잘못 입력했습니다. 다시 확인해주세요."
        });
    },
};

// index.js에서 사용할 수 있게 모듈을 바깥으로 뺴주기 
module.exports = {
    output,
    process
}; 