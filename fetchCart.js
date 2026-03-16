import { updateCartIcon } from "./utils.js";

const userAddedProducts = JSON.parse(localStorage.getItem("cart")) || [];
const cartContainer = document.querySelector("#cart-container");

const checkOutButton = document.querySelector("#checkout-button");
checkOutButton.addEventListener("click", () => {
  if(userAddedProducts.length > 0) {
  window.location.href = "checkout.html";
  } else{
    alert("Your cart is empty. Please add some products before proceeding to checkout.");
  }
});

function getCartProducts() {
  if (userAddedProducts.length === 0) {
    cartContainer.innerHTML = `<div class="col-12">
            <p class="text-center">Your cart is empty.</p>
          </div>`;
    return;
  }

  cartContainer.innerHTML = "";
  userAddedProducts.forEach((product) => {
    const productCard = `
    <div class="col-10 mb-2">
      <div class="cart-product-card shadow-sm border rounder p-2">
        <div class="row align-items-center g-2">
          <div class="col-3 col-md-2 text-center flex-shrink-0 cart-product-image" >
            <img src="${product.image}" alt="${product.title}" class="img-fluid rounded" >
          </div>
          <div class="col-5 col-md-8">
            <h2 class="product-title">${product.title}</h2>
            <p class="cart-product-description text-muted mb-0 d-none d-md-block">${product.description}</p>
            <p class="product-price ms-left-auto">Piece: $${product.price}</p>
 
          <div class="col-md-2">
            <div class="input-group input-group-sm">
              <button class="btn btn-outline-secondary" type="button">-</button>
              <input type="text" class="form-control text-center" value="${product.quantity}" readonly>
              <button class="btn btn-outline-secondary" type="button">+</button>
            </div>
            </div> 
          </div>
        <div class="col-md-2 text-end pe-5">
        <p class="product-price mb-0">Total: $${(product.price * product.quantity).toFixed(2)}</p>
        <button class="btn btn-sm btn-danger mt-2">Remove</button>
      </div>
    </div>
    `;
    cartContainer.innerHTML += productCard;
  });
  updateCartIcon(userAddedProducts);
}

let totalItemsNumber = document.querySelector("#cart-item-count");
let totalPricesNumber = document.querySelector("#cart-total-price");

function updateCartSummary(){

  totalItemsNumber.textContent = getCartTotalItems();
  totalPricesNumber.textContent = `$${getCartTotalPrice().toFixed(2)}`;

}

function getCartTotalPrice(){
 let sumOfAllProductsTotalPrice = 0;

  userAddedProducts.forEach((product) => {
    const totalPrice = product.price * product.quantity;
    sumOfAllProductsTotalPrice += totalPrice;
  });

  return sumOfAllProductsTotalPrice;
}

function getCartTotalItems(){
  let sumOfAllItemsInCart = 0;

  userAddedProducts.forEach((product) => {
    sumOfAllItemsInCart += product.quantity;
  });
  return sumOfAllItemsInCart;
}

getCartProducts();
updateCartSummary();