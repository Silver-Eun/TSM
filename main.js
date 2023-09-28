const toggleBtn = document.querySelector(".navbar__toggleBtn");
const menu = document.querySelector(".navbar__menu");

toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
  icons.classList.toggle("active");
});
menu.addEventListener("click", () => {
  menu.classList.toggle("active");
  icons.classList.toggle("active");
});
