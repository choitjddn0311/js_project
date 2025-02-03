const showBox = document.querySelector('.showBox');
const num = document.querySelectorAll('.num');
const keypress = () => {
    window.addEventListener('keydown' , (e) => {
        const key = document.getElementById(e.key);
        if(key) {
            showBox.innerHTML = `<p>${e.key}</p>`;
            key.classList.add('press');
        }
    })
    window.addEventListener('keyup' , (e) => {
        const key = document.getElementById(e.key);
        if(key) {
            key.classList.remove('press');
        }
    })
}
keypress();