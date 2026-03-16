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

const successModal = document.querySelector("#successModal")
const modalInstance = new bootstrap.Modal(successModal)
let modalText = document.querySelector(".modal-text")
const inputName = document.querySelector("#name")
const inputEmail = document.querySelector("#email")

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (form.checkValidity()) {
    const nameOfUser = inputName.value;
    const emailOfUser = inputEmail.value;
    modalText.innerHTML = `Thanks for your purchase ${nameOfUser}. <br>
    Confirmation e-mail has been sent to ${emailOfUser}.`
    modalInstance.show();
    localStorage.removeItem("cart");
    updateCartIcon(userAddedProducts);

    setTimeout(() => {
      modalInstance.hide();
      window.location.href = "index.html"

    },3000 );

  } else{
    console.log("form not validated");
  }
});
updateCartIcon(userAddedProducts);
