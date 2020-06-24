
(function() {

  const slides = document.querySelectorAll('.fade-slider__item'),
        activeSlide = 'fade-slider__item--visible';

  let index = 0;

  setInterval(function() {
    slides[index].classList.remove(activeSlide);
    index++;
    if (index + 1 > slides.length) {
      index = 0;
    }
    slides[index].classList.add(activeSlide);
  }, 5000);

}());

