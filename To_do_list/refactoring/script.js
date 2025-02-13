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
            <li class="list"><div class="under"></div><p>${myList.value}</p> <input type="checkbox" class="listCK"></li>
            `;
        } else if(listBox.children.length > listMax) {
            alert('더이상 추가할 수 없습니다.');
        }
    })
}
const listModal = () => {
    const closeBtn = document.getElementById('closeBtn');
    listBox.addEventListener('click' , (e) => {
        console.log(e.target.tagName);
        if(e.target.tagName === 'P') {
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

    let selectedListItem = null;

    listBox.addEventListener('click', (e) => {
        if (e.target.tagName === "P") {
            selectedListItem = e.target.closest('li'); // 클릭한 <li> 요소 저장
            const currentText = selectedListItem.querySelector('p').innerText;
            changeText.value = currentText; // 기존 내용을 input에 넣기
        }
    });

    saveBtn.addEventListener('click', () => {
        if (selectedListItem && changeText.value.trim() !== '') {
            selectedListItem.querySelector('p').innerText = changeText.value; // 기존 값 변경
            modal.classList.remove('showModal');
        } else if(selectedListItem || changeText.value == ''){
            alert('수정할 내용을 입력해주세요.');
            changeText.focus();
        }
    });
}
const checkInput = () => {
    listBox.addEventListener('change' , (e) => {
        if(e.target.classList.contains('listCK')) {
            const listItem = e.target.closest('li');
            const under = listItem.querySelector('.under');
            if(e.target.checked) {
                under.classList.add('afterCheck');
                e.target.closest('li').style.color = "#aaa";
            } else {
                under.classList.remove('afterCheck');
                e.target.closest('li').style.color = "#333";
            }
        }
    })
}
ChildCk();
listAdd();
listModal();
changeText();
checkInput();


// 변경은 다 잘되나 새로운 todolist를 생성할 때 input checkbox해제
// todolist를 생성 후 -> input창 그 내용으로 채워져있음 (비워워지게 해놓기)