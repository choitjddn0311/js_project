let bgColor = document.querySelector('body');
let textColor = document.getElementById('textColor');
let colorBtn =  document.getElementById('colorBtn');
let rgbName = document.getElementById('rgbName')

function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`
}
function changeColor() {
    const color = randomColor();
    bgColor.style.backgroundColor = color;
    textColor.style.color = color;
    colorBtn.style.backgroundColor = color;
    rgbName.style.color = color;
}
colorBtn.addEventListener('click' , changeColor)
colorBtn.addEventListener('click' , ()=> {
    const colorText = randomColor();
    rgbName.innerText = colorText;
})