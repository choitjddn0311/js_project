const modal = document.querySelector('.modal');
const open_btn = document.querySelector('.modal_btn');
const close_btn = document.querySelector('.close_btn');

open_btn.addEventListener('click' , function(){
    modal.classList.add('on');
});
close_btn.addEventListener('click' , function(){
    modal.classList.remove('on');
})