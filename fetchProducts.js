const container = document.querySelector("#product-container");

fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((products) => {
    container.innerHTML = "";

    products.forEach((product) => {
      const productCard = `<div class="product-card">
          <img src="${product.image}" alt="${product.title}" class="product-image">
        <div class = "product-info">
            <h2 class = "product-name">${product.title}</h2>
            <p class = "product-description">${product.description}</p>
            <p class = "product-price">$${product.price}</p>
            <button class = "add-to-cart">Add to Cart</button>
        </div>
        </div>`;

      container.innerHTML += productCard;
    });
  })
  .catch((error) => console.error("Error fetching products:", error));
