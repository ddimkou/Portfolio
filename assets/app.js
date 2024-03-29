const hamburgerButton = document.querySelector("#hamburger");
const mobileMenu = document.querySelector(".nav-mobile");
const toggleButton = () => {
  hamburgerButton.classList.toggle("is-active");
  mobileMenu.classList.toggle("is-active");
};
hamburgerButton.addEventListener("click", toggleButton);

const mobileLinks = document.querySelectorAll(".nav-mobile a");
mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hamburgerButton.classList.remove("is-active");
    mobileMenu.classList.remove("is-active");
  });
});
