window.addEventListener("keydown" , (e) => {
    const key = document.getElementById(e.key);
    if(key) key.classList.add('a');
});

window.addEventListener("keyup" , (e) => {
    const key = document.getElementById(e.key);
    if(key) key.classList.remove('a');
})