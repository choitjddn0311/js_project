let text = document.getElementById("txt");
let plus = document.getElementById("plus");
let todo = document.getElementById("todo");

plus.addEventListener('click' , ()=> {
    let li = document.createElement('li');
    let del = document.createElement('button');

    if(text.value == ''){
        alert("please input the todo list");
    }
    else {
        del.textContent = 'finish';
        del.addEventListener('click' , () => {
            todo.removeChild(li);
        });

        li.textContent = text.value;
        li.appendChild(del);
        todo.appendChild(li);
        text.value = '';
    }
});
