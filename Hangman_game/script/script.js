const keyboardDiv = document.querySelector('.keyboard');

const getRandomWord = () => {
    //wordList파일에서 랜덤 단어와 힌트를 선택한다
    const {word, hint} = wordList[Math.floor(Math.random() * wordList.length)];
    console.log(word, hint)
}

// 키보드 버튼 만드는 for문
for (let i = 97; i <= 122; i++) {
    const button = document.createElement("button");
    button.innerText = (String.fromCharCode(i));
    keyboardDiv.appendChild(button);
}

getRandomWord();