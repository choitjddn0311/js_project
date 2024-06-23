let text = document.getElementById("txt");
let plus = document.getElementById("plus");
let todo = document.getElementById("todo");

plus.addEventListener('click' , ()=> {
    let li = document.createElement('li');
    let del = document.createElement('button');

    del.textContent = 'delete';
    del.addEventListener('click' , () => {
        todo.removeChild(li);
    });

    li.textContent = text.value;
    li.appendChild(del);
    todo.appendChild(li);
    text.value = '';
    if(text.value.trim() === '') {
        alert("the values are empty , please enter the values");
        return;
    }
})

