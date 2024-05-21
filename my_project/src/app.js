const express = require('express'); // 내가 express js를 쓰니까 express 모듈을 불러와 express라는 변수에 할당
const app = express(); // 서버에 핵심기능 처리부분 
app.use(express.json());  //서버응답과 클라이언트 사이에 부분을 처리해줌
app.listen(3001 , () => { //서버 시작 부분 arrow함수사용해 3001포트 연결
    console.log('http://localhost:3001'); //성공되면 메시지창에 이 메시지를 띄워라
});
app.get('/' , (req , res) => {
    res.send('인평자동차고등학교');
});

// https://velog.io/@seo__namu/Express-%EA%B0%9C%EB%B0%9C-%ED%99%98%EA%B2%BD-%EA%B5%AC%EC%84%B1%ED%95%98%EA%B8%B0