var pageHeader = document.querySelector('.page-header');
var container = pageHeader.querySelector('.page-header__container')
var mainNav = pageHeader.querySelector('.main-nav');
var toggle = pageHeader.querySelector('.main-nav__toggle');

pageHeader.classList.remove('page-header--opened');
mainNav.classList.remove("main-nav--nojs");
mainNav.classList.remove('main-nav--opened');
mainNav.classList.add('main-nav--closed');
container.classList.add('page-header__container--closed');

toggle.addEventListener('click', function (evt) {
  evt.preventDefault();
  mainNav.classList.toggle('main-nav--closed');
  mainNav.classList.toggle('main-nav--opened');

  pageHeader.classList.toggle('page-header--opened-js');
  container.classList.toggle('page-header__container--closed');
})
