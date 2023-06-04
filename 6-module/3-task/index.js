import createElement from '../../assets/lib/create-element.js';

export default class Carousel {

  constructor(slides) {
    this.slides = slides;
    this.elem = this.#render();
  }

  get elem() {
    return this._elem;
  }
  
  set elem(elem) {
    this._elem = elem;
  }

  #render() {
    const elem = createElement(this.#template());
    
    //добавляем событие для всей карусели по клику на кнопку + на слайде
    elem.querySelectorAll('.carousel__slide').forEach(slide => {
      slide.querySelector('.carousel__button').addEventListener('click', function () {
        elem.dispatchEvent(new CustomEvent("product-add", {
          detail: slide.dataset.id,
          bubbles: true
        }));
      });
    });

    //добавляем события при клике на кнопки вправо влево на карусели
    let currentOffsetWidth = 0;
    let currentImg = 1;
    const leftArrowButton = elem.querySelector('.carousel__arrow_left');
    const rightArrowButton = elem.querySelector('.carousel__arrow_right');
    const carousel = elem.querySelector('.carousel__inner');
    
    leftArrowButton.style.display = 'none';
    const slidesLength = Array.from(this.slides).length;

    rightArrowButton.addEventListener('click', () => {
      currentOffsetWidth -= carousel.offsetWidth;
      carousel.style.transform = `translateX(${currentOffsetWidth}px)`;
      currentImg += 1;

      if (currentImg >= slidesLength) {
        rightArrowButton.style.display = 'none';
      } else {
        rightArrowButton.style.display = '';
      }
      if (currentImg < 1) {
        leftArrowButton.style.display = 'none';
      } else {
        leftArrowButton.style.display = '';
      }
    });

    leftArrowButton.addEventListener('click', () => {
      currentOffsetWidth += carousel.offsetWidth;
      carousel.style.transform = `translateX(${currentOffsetWidth}px)`;
      currentImg -= 1;

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

    
    return elem;
  }

  #template() {
    
    const arrowsTemplate = `
      <div class="carousel__arrow carousel__arrow_right">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </div>
      <div class="carousel__arrow carousel__arrow_left">
        <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
      </div>
    `;

    const slidesTemplate = this.slides.map(slide => {
      return `
      <div class="carousel__slide" data-id="${slide.id}">
        <img src="/assets/images/carousel/${slide.image}" class="carousel__img" alt="slide">
        <div class="carousel__caption">
          <span class="carousel__price">€${slide.price.toFixed(2)}</span>
          <div class="carousel__title">${slide.name}</div>
          <button type="button" class="carousel__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
          </button>
        </div>
      </div>
      `;
    }).join('');

    return `
      <!--Корневой элемент карусели-->
      <div class="carousel">
        <!--Кнопки переключения-->
        ${arrowsTemplate}
        <!--Слайды-->
        <div class="carousel__inner">
          ${slidesTemplate}
        </div>
      </div>
    `;
  }
}
