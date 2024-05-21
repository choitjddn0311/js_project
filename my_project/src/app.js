const express = require('express');
const app = express();
app.use(express.json());
app.listen(3001 , () => {
    console.log('http://localhost:3001');
});
app.get('/' , (req , res) => {
    res.send('인평자동차고등학교');
});

// https://velog.io/@seo__namu/Express-%EA%B0%9C%EB%B0%9C-%ED%99%98%EA%B2%BD-%EA%B5%AC%EC%84%B1%ED%95%98%EA%B8%B0