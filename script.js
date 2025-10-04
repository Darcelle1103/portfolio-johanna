
const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");


burger.addEventListener("click", () => {
  nav.classList.toggle("active");
  burger.classList.toggle("toggle");
});


document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
    burger.classList.remove("toggle");
  });
});
