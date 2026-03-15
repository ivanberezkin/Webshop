export function updateCartIcon(userAddedProducts) {
  const cartCount = document.querySelector("#cart-count");
  let sumOfQuantities = 0;
  userAddedProducts.forEach((product) => {
    if(product.quantity != null) {
      sumOfQuantities += product.quantity;
    }
  });
  if (sumOfQuantities < 1) {
    sumOfQuantities = 0;
  }
  cartCount.textContent = sumOfQuantities;
}