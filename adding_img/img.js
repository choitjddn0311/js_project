function loadFile(input) {
    let file = input.files[0]; //이미지 선택파일가져오기 [0]이 의미하는건 사용자가 처음 선택한 파일
    let newImg = document.createElement("img"); // 새로운 이미지 태그 생성

    // 이미지 소스 가져오기
    newImg.src = URL.createObjectURL(file);
    newImg.style.width = "100%";
    newImg.style.height = "100%";
    newImg.style.objectFit = "cover";

    let container = document.getElementById("imgShow");
    container.appendChild(newImg)
}