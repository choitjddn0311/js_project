const wordDisplay = document.querySelector('.word-display');
const keyboardDiv = document.querySelector('.keyboard');

let currentWord;

const getRandomWord = () => {
    //wordList파일에서 랜덤 단어와 힌트를 선택한다
    const {word, hint} = wordList[Math.floor(Math.random() * wordList.length)];
    currentWord = word;
    console.log(word);
    document.querySelector(".hint-text").innerText = hint;
    wordDisplay.innerHTML = word.split("").map(() => `<li class="letter"></li>`).join("");
}

const initGame = (button, clickedLetter) => {
    if(currentWord,includes(clickedLetter)) {
        console.log(clickedLetter, " is exist on the word");
    } else {
        console.log(clickedLetter, " is not exist on the word");
    }
}

// 키보드 버튼 만드는 for문
for (let i = 97; i <= 122; i++) {
    const button = document.createElement("button");
    button.innerText = (String.fromCharCode(i));
    keyboardDiv.appendChild(button);
    button.addEventListener("click" , e => initGame(e.target, String.fromCharCode(i)));
}

getRandomWord();