import { updateCartIcon } from "./utils.js";

const form = document.querySelector("#checkout-form");
const userAddedProducts = JSON.parse(localStorage.getItem("cart")) || [];
const inputs = form.querySelectorAll("input");

inputs.forEach((input) => {
  input.addEventListener("input", () => {
    if (input.checkValidity()) {
      input.classList.remove("is-invalid");
      input.classList.add("is-valid");
    } else {
      input.classList.remove("is-valid");
      input.classList.add("is-invalid");
    }
  });
});

updateCartIcon(userAddedProducts);