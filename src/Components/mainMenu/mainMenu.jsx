import React, { Component } from 'react';
import MenuList from '../menuList/menuList';

import './mainMenu.css';

const menuList = [
  {
    name: 'Home',
    link: '/'
  },
  {
    name: 'About',
    link: '/about'
  },
  {
    name: 'Works',
    link: 'works'
  },
  {
    name: 'Contacts',
    link: '/contacts'
  }
]

export default class MainMenu extends Component {
  state = {
    menuOpened: false
  }

  toggleMenu = () => {
    this.setState((state) => ({
      menuOpened: !state.menuOpened,
    }))
  }

  render() {
    const { menuOpened } = this.state;
    return (
      <div className={`menu ${menuOpened && 'opened'}`}>
        <div className="toggler" onClick={this.toggleMenu}>
          <button className="toggle-menu" >
            {!menuOpened ? 'Открыть' : 'Закрыть'}
          </button>
        </div>
        
        {menuOpened && <MenuList list={menuList} />}
      </div>
    )
  }
}