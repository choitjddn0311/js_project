const buttons = document.querySelectorAll('.btn'); // 모든 btn요소를 모두 불러오는것
const textarea = document.querySelector('textarea'); // 첫번째 요소만 선택하는것 all과 아닌것의 차이다

const del_btn = document.querySelector('.delete');
const shift_btn = document.querySelector('.shift');
const space_btn = document.querySelector('.space');

let chars = [];

buttons.forEach(btn => {
    btn.addEventListener('click' , () => {
        textarea.value += btn.innerText
        chars = textarea.value.split('');
    })
});

del_btn.addEventListener('click' , () => {
    chars.pop();
    textarea.value = chars.join('')
});

space_btn.addEventListener('click' , () => {
    chars.push(' ')
    textarea.value = chars.join('')
})

shift_btn.addEventListener('click' , () => {
    buttons.forEach(btn => {
        btn.classList.toggle('upper')
    })
});