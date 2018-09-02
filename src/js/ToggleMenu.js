'use strict';
export default class {
  constructor() {
    this.menuTrigger = document.querySelector('.nav-trigger');
    this.navMenu = document.querySelector('.nav'),
    this.openClass = 'nav--open';
    this.init();
    this.setNavVisibility();
  }
  init () {
    this.menuTrigger.addEventListener('click',
      () => this.toggle()
    )
    window.addEventListener('resize', () => {
      this.setNavVisibility();
    });
    window.addEventListener('keydown', (e) => {
      if (e.which === 27
        && this.navMenu.classList.contains(this.openClass)
      ) {
        this.closeMenu();
        const mainContent = document.querySelector('.main'),
              target = mainContent.querySelectorAll('h1, h2, h3, h4, h5, h6')[0];
        target.setAttribute('tabindex', '-1');
        target.focus();
      }
    });
  }
  toggle () {
    if (this.navMenu.classList.contains(this.openClass)) {
      this.menuTrigger.setAttribute('aria-expanded', false);
      this.navMenu.setAttribute('aria-hidden', true);
      this.closeMenu();
    }
    else {
      this.menuTrigger.setAttribute('aria-expanded', true);
      this.navMenu.classList.add(this.openClass);
      this.navMenu.setAttribute('aria-hidden', false);
      this.navMenu.querySelectorAll('a[href]')[0].focus();
    }
  }
  closeMenu () {
    this.navMenu.classList.remove(this.openClass);
  }
  setNavVisibility () {
    if (window.matchMedia('(min-width: 768px)').matches) {
      this.navMenu.setAttribute('aria-hidden', false);
    }
    else {
      if (!this.navMenu.classList.contains(this.openClass)) {
        this.navMenu.setAttribute('aria-hidden', true);
      }
    }
  }
}
