(()=>{const e=document.querySelector(".header__nav");document.querySelector(".header__mobile-btn").addEventListener("click",(function(){e.classList.contains("header__nav--close")?(e.classList.remove("header__nav--close"),e.classList.add("header__nav--open")):(e.classList.remove("header__nav--open"),e.classList.add("header__nav--close"))})),new Swiper(".swiper",{loop:!0,mousewheel:!0})})();