const listBox = document.getElementById('listBox');
const myList = document.getElementById('myList');
const addBtn = document.getElementById('addBtn');
const listAdd = () => {
    addBtn.addEventListener('click' , () => {
        if(myList.value == ''){
            alert('할 일을 작성해주세요.');
            myList.focus();
            return;
        }
        const noChildText = document.querySelector('.noChild');
        if(noChildText){
            noChildText.remove();
        }

        const listMax = Math.floor(listBox.clientHeight/40);
        if(listBox.children.length <= listMax) {
            listBox.innerHTML += `
            <li class="list"><p>${myList.value}</p> <input type="checkbox" class="listCK"></li>
        `;
        } else if(listBox.children.length > listMax) {
            alert('더이상 추가할 수 없습니다.');
        }
    })
}
const listModal = () => {
    listBox.addEventListener('click' , (e) => {
        if(e.target.closest('li')) {
        }
    })
}
const ChildCk = () => {
    if(listBox.children.length === 0){
    listBox.innerHTML = `<h1 class="noChild">오늘의 일정이 없습니다.</h1>`
    }
};

ChildCk();
listAdd();
listModal();
