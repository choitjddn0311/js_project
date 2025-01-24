window.addEventListener('scroll' , () => {
    //scrollHeight = scrollTop의 최댓값 + clientHeight 
    const scrollTop = document.querySelector('html').scrollTop;
    const scrollHeight = document.querySelector('html').scrollHeight;
    const clientHeight = document.querySelector('html').clientHeight;
    console.log("scrollTop: " , scrollTop);
    console.log("scrollHeight:" , scrollHeight);
    console.log("clientHeight:" , clientHeight);

    const progress = ((scrollTop+clientHeight) / scrollHeight) * 100;

    document.querySelector(".progressBar").style.width = progress + "%";
})