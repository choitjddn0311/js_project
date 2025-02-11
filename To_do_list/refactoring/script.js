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

    let selectedListItem = null;

    listBox.addEventListener('click', (e) => {
        if (e.target.closest('li')) {
            selectedListItem = e.target.closest('li'); // 클릭한 <li> 요소 저장
            const currentText = selectedListItem.querySelector('p').innerText;
            changeText.value = currentText; // 기존 내용을 input에 넣기
            modal.classList.add('showModal');
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

ChildCk();
listAdd();
listModal();
changeText();

// input창을 체크했을때도 모달이 켜짐 (p태그 기준으로 클릭됐을때로 설정할 것)