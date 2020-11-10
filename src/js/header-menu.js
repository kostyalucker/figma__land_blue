document.addEventListener('DOMContentLoaded', function () {
  const button = document.querySelector(".header-menu__mobile-menu");
  const menu = document.querySelector(".header-menu__nav");
  button.addEventListener('click', function () {

    if (menu.classList.contains('active')) {
      menu.classList.remove('active');
      button.classList.remove('open');
    }
    else {
      menu.classList.add('active');
      button.classList.add('open');
    }
  })
});