const express = require('express');
const router = express.Router();

const posts = {
    data : [],
    id: 1,
}


//글 다 보기
router.get('/' , (req,res) => {
    res.send(posts.data);
});

// 글 하나만 보는거
router.get('/:id' , (req,res) => {
    const post = posts.data.find((post) => post.id == parseInt(req.params.id)); //post.data배열에서 첫번째게시물을 찾는다 이 아이디가 
})

// 글 올리는거
router.post('/' , (req,res) => {
    //추가 하는거
    // 안에 빠지는 내용 있는지 보는 코드
})

//글 바꿀래하는거
router.put('/:id' , (req,res) => {
    //안에 빠지는 내용 있는지 보는 코드
    //수정 코드
    //글 존재여부코드
})

//아 나 글 지울거임 니네 보지마삼 ㅋㅋ
router.delete('/:id' , (req,res) => {
    // 글 삭제
    // ???
})

module.exports = router;


//https://velog.io/@seo__namu/Express-CRUD-%EA%B8%B0%EB%8A%A5-%EA%B5%AC%ED%98%84