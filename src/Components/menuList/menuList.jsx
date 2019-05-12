import React from 'react';

import './menuList.css';

const MenuList = ({ list }) =>
  <ul className="menu-list">
    {list.map(item =>
      <li className="menu-list__item">
        <a href={item.link} className="menu-list__link">{item.name}</a>
      </li>
    )}
  </ul>

export default MenuList;