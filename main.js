import './style.css';

const accordion = document.querySelector('.advantages__list')

console.log(accordion)

accordion.addEventListener('click', (e)=> {
  if(!e.target.classList.contains('advantage__title')) return;

  if(e.target.parentNode.classList.contains('advantage_active')) {
    setTimeout(()=>{
      e.target.parentNode.classList.remove('advantage_active');
      e.target.parentNode.classList.remove('advantage_closing');
    },1000)

    e.target.parentNode.classList.add('advantage_closing');

    return
  }

  e.target.parentNode.classList.add('advantage_active');
  // e.target.parentNode.classList.`toggle`('advantage_active');
})

// Slider

$(document).ready(function(){
  $(".slider__content").bxSlider({
    minSlides: 1,
    maxSlides: 1,
    slideWidth: 176,
    pagerCustom: '#bx-pager',
    nextSelector: '#slider-next',
    prevSelector: '#slider-prev',
    nextText: `<img src="./src/assets/img/control.svg" alt="next control">`,
    prevText: `<img src="./src/assets/img/control.svg" alt="prev control">`,
  });
});
