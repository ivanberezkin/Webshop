const userAddedProducts = JSON.parse(localStorage.getItem("cart")) || [];
const cartContainer = document.querySelector("#cart-container");

function getCartProducts() {
  if (userAddedProducts.length === 0) {
    cartContainer.innerHTML = `<div class="col-12">
            <p class="text-center">Your cart is empty.</p>
    div>`;
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
          <div class="product-footer">
            <p class="product-price">$${product.price}</p>
          </div>
        </div>
      </div>
    </div>`;
    cartContainer.innerHTML += productCard;
  });
  updateCartIconInCart();
}

function updateCartIconInCart() {
  const cartCountElement = document.querySelector("#cart-count");
  cartCountElement.textContent = userAddedProducts.length;
}

getCartProducts();
