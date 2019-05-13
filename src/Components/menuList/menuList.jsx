import React from 'react';
import {NavLink} from 'react-router-dom';

import './menuList.css';

const MenuList = ({ list, handleClick }) =>
  <nav>
    <ul className="menu-list">
      {list.map(item =>
        <li className="menu-list__item" key={item.link}>
          <NavLink to={item.link} exact className="menu-list__link" onClick={handleClick} activeClassName="active">{item.name}</NavLink>
        </li>
      )}
    </ul>
  </nav>

export default MenuList;