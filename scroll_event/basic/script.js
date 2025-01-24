let observer = new IntersectionObserver((e) => {
    e.forEach((b)=>{
        if(b.isIntersecting){
            b.target.style.opacity = 1;
        } else {
            b.target.style.opacity = 0;
        }
        b.intersectionRatio
    })
})
let div = document.querySelectorAll('div');
observer.observe(div[0]);
observer.observe(div[1]);
observer.observe(div[2]);
observer.observe(div[3]);