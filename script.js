document.addEventListener("DOMContentLoaded", () => {
  const boton = document.getElementById("mobile-menu");
  const menu = document.querySelector(".nav-list");

  boton.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
});

