const jsCanvas = document.getElementById("jsCanvas");
const ctx = jsCanvas.getContext("2d");
jsCanvas.width = 600;
jsCanvas.height = 600;
let painting = false;

// 마우스를 눌렀을 때 페인팅 시작
const startPainting = () => (painting = true);
// 마우스를 뗐을 때 페인팅 멈춤
const stopPainting = () => {
    painting = false;
    ctx.beginPath(); // 경로 초기화
};

// 마우스가 움직일 때 호출되는 함수
const mouseOn = (e) => {
    const x = e.offsetX;
    const y = e.offsetY;

    if (!painting) {
        ctx.beginPath();
        ctx.moveTo(x, y);
    } else {
        ctx.lineTo(x, y);
        ctx.stroke();
    }
};

// 이벤트 리스너 등록
jsCanvas.addEventListener("mousemove", mouseOn);
jsCanvas.addEventListener("mousedown", startPainting);
jsCanvas.addEventListener("mouseup", stopPainting);
jsCanvas.addEventListener("mouseleave", stopPainting);
