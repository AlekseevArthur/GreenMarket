import {products} from '../state/products'
import state from '../state'

let newState = state.getState()

export default class Search {
  constructor(data) {
    this.input = document.getElementById(data.input);
    this.container = document.getElementById(data.container);
    this.products = products;
    this.input.addEventListener("change", this.searchStr.bind(this));
  }

  searchStr(inputValue) {
    let str = inputValue.target.value.trim();
    this.container.innerHTML = "";
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].tags.indexOf(str) + 1 && str) {
        this.container.appendChild(this.flyDownElement(this.products[i]));
      }
    }
  }

  flyDownElement(product) {
    let element = document.createElement("div");
    element.setAttribute("class", "search-result");
    element.addEventListener('click',()=>this.openProductPage(product))

    let img = document.createElement("img");
    img.setAttribute("class", "search-result-img");
    img.setAttribute("src", product.image);

    let text = document.createElement("div");
    text.setAttribute("class", "search-result-text");

    let name = document.createElement("div");
    name.setAttribute("class", "search-result-name");
    name.innerHTML = product.name;

    let price = document.createElement("div");
    price.setAttribute("class", "search-result-cost");
    price.innerHTML = "$" + product.price;

    text.appendChild(name);
    text.appendChild(price);

    element.appendChild(img);
    element.appendChild(text);

    return element;
  }

  openProductPage(product){
    console.log('hi')
    newState.product = product
    state.setState(newState)
    window.location = 'product.html'
}
}
