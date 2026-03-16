import { updateCartIcon } from "./utils.js";

const userAddedProducts = JSON.parse(localStorage.getItem("cart")) || [];
const cartContainer = document.querySelector("#cart-container");

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
    <div class="col-12 mb-2">
      <div class="product-card shadow-sm border rounder p-2">
        <div class="row align-items-center g-2">
          <div class="col-3 col-md-2 text-center flex-shrink-0 cart-product-image" >
            <img src="${product.image}" alt="${product.title}" class="img-fluid rounded" >
          </div>
          <div class="col-5 col-md-6">
            <h2 class="product-title">${product.title}</h2>
            <p class="product-description text-muted mb-0 d-none d-md-block">${product.description}</p>
            <p class="product-price ms-left-auto">Piece: $${product.price}</p>

          </div>
        </div>
      </div>
    </div>
    `;
    cartContainer.innerHTML += productCard;
  });
  updateCartIcon(userAddedProducts);
}

getCartProducts();