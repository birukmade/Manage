const hamburgerbuttenElement = document.querySelector("#hamburger-icon");
const mobileMenuElement = document.querySelector("#mobile-menu");

hamburgerbuttenElement.addEventListener("click", function () {
  hamburgerbuttenElement.classList.toggle("open");
  mobileMenuElement.classList.toggle("expanded");
});
