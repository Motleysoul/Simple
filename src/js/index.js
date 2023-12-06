const indexNav = document.querySelector('.header__nav');
const navBtn = document.querySelector('.header__mobile-btn');

navBtn.addEventListener('click', function() {
  if (indexNav.classList.contains('header__nav--close')) {
    indexNav.classList.remove('header__nav--close');
    indexNav.classList.add('header__nav--open');
  } else {
    indexNav.classList.remove('header__nav--open');
    indexNav.classList.add('header__nav--close');
  }
});

const swiper = new Swiper('.swiper', {
    loop: true,
    mousewheel: true,
  });