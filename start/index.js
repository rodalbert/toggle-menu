/* YOUR CODE HERE */
const $toggleMenu = document.querySelector(".toggle-menu");
const $menuDrawer = document.querySelector(".menu-drawer");

const handleClick = () => {
  $toggleMenu.classList.toggle("active");
  $menuDrawer.classList.toggle("open");
};

$toggleMenu.addEventListener("click", handleClick);
