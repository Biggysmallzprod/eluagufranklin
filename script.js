document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.createElement("div");
  navToggle.className = "nav-toggle";
  navToggle.innerHTML =
    '<i class="fas fa-bars"></i><i class="fas fa-times"></i>';
  document.querySelector("header .container").appendChild(navToggle);

  navToggle.addEventListener("click", function () {
    document.querySelector("nav ul").classList.toggle("showing");
    navToggle.classList.toggle("active");
  });
});
