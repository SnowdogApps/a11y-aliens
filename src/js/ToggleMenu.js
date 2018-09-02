'use strict';
export default class {
  constructor() {
    this.menuTrigger = document.querySelector('.nav-trigger');
    this.navMenu = document.querySelector('.nav'),
    this.openClass = 'nav--open';
    this.init();
  }
  init () {
    this.menuTrigger.addEventListener('click',
      () => this.toggle(this.navMenu)
    )
  }
  toggle(navMenu) {
    if (navMenu.classList.contains(this.openClass)) {
      navMenu.classList.remove(this.openClass);
    }
    else {
      navMenu.classList.add(this.openClass);
    }
  }
}
