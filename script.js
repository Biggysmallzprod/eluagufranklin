document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.getElementById('nav-toggle');
  const navUl = document.getElementById('nav-ul');

  navToggle.addEventListener('click', function () {
    navUl.classList.toggle('showing');
    navToggle.classList.toggle('active');
  });
});
