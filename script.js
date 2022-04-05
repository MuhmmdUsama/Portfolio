const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const body = document.querySelector(".body");
const tap = document.querySelector(".tap");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  headline.classList.toggle("active");
});

document.querySelectorAll(".nav-item").forEach((e) =>
  e.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    tap.classList.remove("active");
  })
);

window.onclick = function global(event) {
  if (event.target === tap) {
    tap.style.display = "none";
    window.location.reload();
  }
};
