const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const slideInner = document.querySelector('.slideInner');
const slideWidth = document.querySelector('.slideInner > li').clientWidth;

let slideNum = 0;
nextBtn.addEventListener('click' , () => {
    const allSlide = slideInner.children.length;
  if(slideNum < allSlide -1 ) {
    slideNum++;
    slideInner.style.left = -(slideWidth*slideNum) + 'px';
  }  
})

prevBtn.addEventListener('click' , () => {
    if(slideNum > 0) {
        slideNum--;
        slideInner.style.left  = - (slideWidth*slideNum) + 'px';
    }
})