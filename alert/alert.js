let alertBtn = document.getElementById("yu");
alertBtn.onclick = function(){
    alert("안녕하세요 자바스크립트 기초입니다")
}
let modalBtn = document.getElementById("hyun");
let closeBtn = document.getElementById("closeBtn");
let modal = document.querySelector('.modal_contain');

modalBtn.onclick = function(){
    modal.style.display = 'block';
}
closeBtn.onclick = function(){
    modal.style.display = 'none';
}

let menuDrop  = document.getElementById("dropdown");
let dropCon = document.querySelector('.menu');

menuDrop.addEventListener("click" , function(){
    if(dropCon.style.display === "block") {
        dropCon.style.display = "none";
    }else{
        dropCon.style.display = "block";
    }
})