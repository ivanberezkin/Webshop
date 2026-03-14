const container = document.querySelector("#product-container");
let allProducts = [];
let userAddedProducts = [];

fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((products) => {
    container.innerHTML = "";
    allProducts = products;

    products.forEach((product) => {
      const productCard = `<div class="col-12 col-sm-6 col-lg-4 col-xl-3 mb-1">
        <div class="product-card shadow-sm">
          <img src="${product.image}" alt="${product.title}" class="product-image">
          <div class="product-info">
            <h2 class="product-title">${product.title}</h2>
            <p class="product-description">${product.description}</p>
            <div class="product-footer">
              <p class="product-price">$${product.price}</p>
              <button data-id="${product.id}" id="add-to-cart" type="button" class="btn btn-primary">Add to Cart</button>
            </div>
          </div>
        </div>`;

      container.innerHTML += productCard;
    });
  })
  .catch((error) => console.error("Error fetching products:", error));

container.addEventListener("click", (event) => {
  if (event.target.matches("#add-to-cart")) {
    const productId = event.target.getAttribute("data-id");
    const addedProduct = allProducts.find(
      (product) => product.id === parseInt(productId),
    );
    userAddedProducts.push(addedProduct);
    console.log("Added to cart:", addedProduct.title);
  }
});
