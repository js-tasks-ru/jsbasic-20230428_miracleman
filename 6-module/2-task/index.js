export default class ProductCard {
  
  constructor(product) {
    this.product = product;
    this.elem = this.#render();
  }
  
  get elem() {
    return this._elem;
  }
  
  set elem(elem) {
    this._elem = elem;
  }
  
  #render() {
    const elem = this.#createElement(this.#template());
    const button = elem.querySelector('.card__button');

    button.addEventListener('click', () => {
      elem.dispatchEvent(new CustomEvent("product-add", { 
        detail: this.product.id, 
        bubbles: true 
      }));
    });
    
    return elem;
  }
   
  #createElement(html) {
    const div = document.createElement('div');
    div.innerHTML = html;
    return div.firstElementChild;
  }
  
  
  #template() {
    return `
      <div class="card">
        <div class="card__top">
          <img src="/assets/images/products/${this.product.image}" class="card__image" alt="product">
          <span class="card__price">€${this.product.price.toFixed(2)}</span>
        </div>
        <div class="card__body">
          <div class="card__title">${this.product.name}</div>
          <button type="button" class="card__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
          </button>
        </div>
     </div>
    `
  }
}