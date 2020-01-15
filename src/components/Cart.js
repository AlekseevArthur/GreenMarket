import state from "../state";


let thisState = state.getState();

export default class Cart {
  constructor(data) {
    this.container = document.getElementById(data.container);
    this.products = data.products;
    this.cart();
  }

  cart() {
    this.container.innerHTML = "";
    this.products.forEach(element => {
      this.container.appendChild(this.createCartItem(element));
    });
  }

  deleteProd(id) {
    for (let i = 0; i < thisState.cart.length; i++) {
      console.log()
      console.log(thisState.cart[i].id===id)
      if (thisState.cart[i].id === id) {
        console.log('hi')
        thisState.cart.splice(i, 1);
      }
    }

    this.products = thisState.cart;
    state.setState(thisState);
    this.cart();
  }

  createCartItem(item) {
    let cartItem = document.createElement("div");
    cartItem.setAttribute("class", "cart-item");

    let imageWrapper = document.createElement("div");
    imageWrapper.setAttribute("class", "image-wrapper");

    let image = document.createElement("img");
    image.setAttribute("class", "cart-image");
    image.setAttribute("src", item.image);

    imageWrapper.appendChild(image);

    let cartContent = document.createElement("div");
    cartContent.setAttribute("class", "cart-content");

    let name = document.createElement("p");
    name.setAttribute("class", "cart-name");
    name.innerHTML = item.name;

    let price = document.createElement("p");
    price.setAttribute("class", "cart-price");
    price.innerHTML = "$ " + item.price;

    cartContent.appendChild(name);
    cartContent.appendChild(price);

    let cartInfo = document.createElement("div");
    cartInfo.setAttribute("class", "cart-info");

    let input = document.createElement("input");
    input.setAttribute("class", "cart-input");
    input.setAttribute("type", "number");
    input.setAttribute("max", "10");
    input.setAttribute("min", "1");
    input.setAttribute("value", item.quantity);

    let totalcost = document.createElement("p");
    totalcost.setAttribute("class", "cart-totalcost");
    totalcost.innerHTML = item.price;

    let del = document.createElement("button");
    del.setAttribute("class", "cart-del");
    del.innerHTML = "del";
    del.addEventListener("click", () => this.deleteProd(item.id));

    cartInfo.appendChild(input);
    cartInfo.appendChild(totalcost);
    cartInfo.appendChild(del);

    cartItem.appendChild(imageWrapper);
    cartItem.appendChild(cartContent);
    cartItem.appendChild(cartInfo);

    return cartItem;
  }
}
