import { updateCartIcon } from "./utils.js";

const container = document.querySelector("#product-container");
let allProducts = [];
let userAddedProducts = JSON.parse(localStorage.getItem("cart")) || [];

fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((products) => {
    container.innerHTML = "";
    allProducts = products;

    products.forEach((product) => {
      const productCard = `<div class="col-12 col-sm-6 col-lg-4 col-xl-3 mb-1 ">
        <div class="product-card shadow-sm border rounded p-2 d-flex flex-column">
          <img src="${product.image}" alt="${product.title}" class="product-image">
          <div class="product-info">
            <h2 class="product-title">${product.title}</h2>
            <p class="product-description text-muted small mb-0">${product.description}</p>
            </div>
              <p class="product-price mb-2 pt-2">$${product.price}</p>
              <button data-id="${product.id}" id="add-to-cart" type="button" class="btn btn-primary">Add to Cart</button>
            
          </div>
        </div>`;
      updateCartIcon(userAddedProducts);
      container.innerHTML += productCard;
    });
  })
  .catch((error) => console.error("Error fetching products:", error));

container.addEventListener("click", (event) => {
  if (event.target.matches("#add-to-cart")) {
    const productId = event.target.getAttribute("data-id");
    
    const productAlreadyInCart = userAddedProducts.find(
      (product) => product.id === parseInt(productId),
    );
    
    if(productAlreadyInCart){
      productAlreadyInCart.quantity += 1;
      console.log("Increased quantity of:", productAlreadyInCart.title, "to", productAlreadyInCart.quantity);
    } else{
    const newProductToAddToCart = allProducts.find(
      (product) => product.id === parseInt(productId),
      
    );
    newProductToAddToCart.quantity = 1;
    userAddedProducts.push(newProductToAddToCart);
    console.log("Added to cart:", newProductToAddToCart.title);
  }
  
    localStorage.setItem("cart", JSON.stringify(userAddedProducts));
    updateCartIcon(userAddedProducts);
    
  }
});


