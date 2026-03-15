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
    const productCard = `<div class="col-12 col-sm-6 col-lg-4 col-xl-3 mb-1">
      <div class="product-card shadow-sm">
        <img src="${product.image}" alt="${product.title}" class="product-image">
        <div class="product-info">
          <h2 class="product-title">${product.title}</h2>
          <p class="product-description">${product.description}</p>
          <div class="product-footer ms-left-auto d-flex align-items-center">
            <p class="product-price ms-left-auto">Piece: $${product.price}</p>
            <p class="product-price ms-auto">Sum: $${(product.price * product.quantity).toFixed(2)}</p>
          </div>
          <div class="quantity-controls ms-auto mt-2">
            <button class="btn btn-sm btn-outline-secondary" onclick="changeQty('${product.id}', -1)">-</button>
            <span class="mx-3 fw-bold">${product.quantity}</span>
            <button class="btn btn-sm btn-outline-secondary" onclick="changeQty('${product.id}', 1)">+</button>
          </div>
        </div>
      </div>
    </div>`;
    cartContainer.innerHTML += productCard;
  });
  updateCartIcon(userAddedProducts);
}

getCartProducts();
