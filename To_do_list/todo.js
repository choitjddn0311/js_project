let text = document.getElementById("txt");
let plus = document.getElementById("plus");
let todo = document.getElementById("todo");

plus.addEventListener('click' , ()=> {
    let li = document.createElement('li');
    let del = document.createElement('button');

    del.textContent = 'del';
    del.addEventListener('click' , () => {
        todo.removeChild(li);
    });

    li.textContent = text.value;
    li.appendChild(del);
    todo.appendChild(li);
    text.value = '';
})

/**
 * 해야할 것
 * 1) input에 입력한 후 엔터치면 추가되게 할것
 * 2) input 안에 값이 없을경우 추가가 되지않게 할것
 */