function initCarousel() {
  lenta = document.querySelector('.carousel_inner');

  const leftArrowButton = document.querySelector('.carousel__arrow_left');
  const rightArrowButton = document.querySelector('.carousel__arrow_right');
  const carousel = document.querySelector('.carousel__inner');

  let currentOffsetWidth = 0;
  let currentImg = 1;

  leftArrowButton.style.display = 'none';
  rightArrowButton.addEventListener('click', () => {
    currentOffsetWidth -= carousel.offsetWidth;
    carousel.style.transform = `translateX(${currentOffsetWidth}px)`;
    currentImg +=1;
    
    if (currentImg > 3) {
      rightArrowButton.style.display = 'none';
    } else {
      rightArrowButton.style.display = '';
    }
    if (currentImg <  1) {
      leftArrowButton.style.display = 'none';
    } else {
      leftArrowButton.style.display = '';
    }
  });

  leftArrowButton.addEventListener('click', () => {
    currentOffsetWidth += carousel.offsetWidth;
    carousel.style.transform = `translateX(${currentOffsetWidth}px)`;
    currentImg -=1;

    if (currentImg >= 4) {
      rightArrowButton.style.display = 'none';
    } else {
      rightArrowButton.style.display = '';
    }
    if (currentImg <= 1) {
      leftArrowButton.style.display = 'none';
    } else {
      leftArrowButton.style.display = '';
    }
  });


}
