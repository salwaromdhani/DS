// Scroll smooth vers les fonctionnalités
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".btn-primary");
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
      top: document.querySelector(".features").offsetTop - 80,
      behavior: "smooth"
    });
  });
});
