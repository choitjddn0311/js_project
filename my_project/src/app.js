const express = require('express');
const app = express();
app.use(express.json());
app.listen(3001 , () => {
    console.log('http://localhost:3001');
});
app.get('/' , (req , res) => {
    res.send('인평자동차고등학교');
});