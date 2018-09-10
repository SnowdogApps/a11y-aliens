'use strict';
export default function skipNav() {
  const skipBtn = document.getElementById('skip-btn');

  skipBtn.addEventListener('click', function(e) {
    e.preventDefault();
    const mainContent = document.querySelector('.main');
    let target = mainContent.querySelectorAll('h1, h2, h3, h4, h5, h6')[0];
    target.setAttribute('tabindex', '-1');
    target.focus();
  });
}
