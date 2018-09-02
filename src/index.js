'use strict'

if (process.env.NODE_ENV === 'production') {
  console.log('welcome');
}
else {
  console.log('hello world');
}

// styles
import './scss/styles.scss';

// js
import lazysizes from 'lazysizes';
import ToggleMenu from './js/ToggleMenu';
import skipNav from './js/skipNav';

new ToggleMenu();
skipNav();
lazysizes;

