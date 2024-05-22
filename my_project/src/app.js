<<<<<<< HEAD
const express = require('express');  // require()함수자체가 node에서 모듈가져올때 사용한다고 함 express모듈을 가지고 와서 express라는 변수에 insert
const app = express(); // express 를 실행하는 함수를 호출해 app 변수에 삽입
app.use(express.json()); //json 파일에 ㄷ접근하여 requsest를 해줌.<-- 사용자가 json파일에 쉽게 접근요청(클라이언트)
app.listen(3001 , () => { // 3001포트로 연결시키는 부분 localhost:3001에서 요청대기 listen은 콜백함수라 함(콜백함수란 다른함수를 파라미터로 받아 내부호출)
    console.log('http://localhost:3001'); //성공하면 터미널에 http://localhost:3001출력해라 하는 부분
=======
const express = require('express'); // 내가 express js를 쓰니까 express 모듈을 불러와 express라는 변수에 할당
const app = express(); // 서버에 핵심기능 처리부분 
app.use(express.json());  //서버응답과 클라이언트 사이에 부분을 처리해줌
app.listen(3001 , () => { //서버 시작 부분 arrow함수사용해 3001포트 연결
    console.log('http://localhost:3001'); //성공되면 메시지창에 이 메시지를 띄워라
>>>>>>> e4608b936dcdaeb7c6f01c8262f2b2ceaa538c9b
});
app.get('/' , (req , res) => { //루트 경로로 들어가면 get요청을 한다
    res.send('안녕하세요 최성우의 게시판입니다.'); //response 로 '여기' <-- 내용을 전달해 서버로 반환 결국 서버 접속할때 res.send(ㅁ세지) 출력 
});

// 미들웨어라는게 있는게 express에서 요청(request)와 응답(respone)사이에 실행되는 함수라더라 요청응답 다 수행해주고 미들웨어 함수는 세가지 인수가 있는데  --> req(request) , res(response) , next 다음미들웨어로 전달하는 함수

//서버 연결 새로고침 귀찮을땐 nodemon깔으면 됨 새로고침만 하면 끝ㅌ~~