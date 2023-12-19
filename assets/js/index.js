function toggleMenu() {
  const menuIcon = document.getElementById("menu-icon");
  const menu = document.getElementById("menu");
  const overlay = document.querySelector(".overlay");

  menuIcon.classList.toggle("active");
  menu.classList.toggle("active");
  overlay.classList.toggle("active");
}

document.querySelector(".overlay").addEventListener("click", toggleMenu);
document.getElementById("menu-icon").addEventListener("click", toggleMenu);
