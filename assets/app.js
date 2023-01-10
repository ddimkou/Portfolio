const hamburgerButton = document.querySelector("#hamburger");
const navList = document.querySelector("#nav-list");
const toggleButton = () => {
  navList.classList.toggle("show");
};
hamburgerButton.addEventListener("click", toggleButton);
