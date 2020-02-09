'use strict';

import menuItems from '../menu.json';
import menuItemTemplate from '../Template/menu-item.hbs';

const refs = {
  menuList: document.querySelector('.js-menu'),
};

createMenu(menuItems);

function createMenu(arr) {
  const markup = arr.reduce((acc, item) => acc + menuItemTemplate(item), '');
  refs.menuList.insertAdjacentHTML('afterbegin', markup);
}
