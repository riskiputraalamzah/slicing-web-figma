const navbar = document.querySelector("nav");

window.addEventListener("scroll", function () {
  const scrollY = window.scrollY;

  if (scrollY > 50) {
    navbar.classList.add("bg-primary-color", "shadow-light");
  } else {
    navbar.classList.remove("bg-primary-color", "shadow-light");
  }
});
