import $ from 'jquery';

class MobileMenu {
  constructor() {
    this.menuIcon = $('.site-header__menu-icon');
    this.menuContent = $('.site-header__menu-content');
    this.siteLogo = $('.site-header__logo');
    this.siteHeader = $('.site-header');
    this.events();
  }

  events() {
    this.menuIcon.click(this.toggleTheMenu.bind(this));
  }

  toggleTheMenu() {
    this.menuContent.toggleClass('site-header__menu-content--is-visible');
    this.siteLogo.toggleClass('site-header__logo--hidden');
    this.siteHeader.toggleClass('site-header--expanded');
    this.menuIcon.toggleClass("site-header__menu-icon--x")
  }
}


export default MobileMenu;
