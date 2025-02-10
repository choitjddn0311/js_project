const listBox = document.getElementById('listBox');
const myList = document.getElementById('myList');
const addBtn = document.getElementById('addBtn');
const modal = document.getElementById('modal');
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
    const closeBtn = document.getElementById('closeBtn');
    listBox.addEventListener('click' , (e) => {
        if(e.target.closest('li')) {
            modal.classList.add('showModal');
        }
    })
    closeBtn.addEventListener('click' , () => {
        modal.classList.remove('showModal');
    })
}
const ChildCk = () => {
    if(listBox.children.length === 0){
    listBox.innerHTML = `<h1 class="noChild">오늘의 일정이 없습니다.</h1>`
    }
};
const changeText = () => {
    const changeText = document.getElementById('changeText');
    const saveBtn = document.getElementById('saveBtn');
    saveBtn.addEventListener('click' , () => {
        // listBox.innerHTML += `
        //     <li class="list"><p>${changeText.value}</p> <input type="checkbox" class="listCK"></li>
        //     `;
        // 원래 있던걸 -> changeText.value 변경
    })
}

ChildCk();
listAdd();
listModal();
changeText();