function slidesPlagin (activeSlide = 0) {
let slides = document.querySelectorAll('.slide');

slides[activeSlide].classList.add('active')
for (const slide of slides) {
  slide.addEventListener('click',() => {
    clearActiveClasses()
slide.classList.add('active')
  })
}

function clearActiveClasses() {
  slides.forEach((slide) => {
    slide.classList.remove('active')
  })
}
}

setTimeout(() => { slidesPlagin(2);
 }, 2000);