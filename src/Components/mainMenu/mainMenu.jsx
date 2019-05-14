import React, { Component } from 'react';
import MenuList from '../menuList/menuList';

import menuList from './menuList';

import './mainMenu.css';

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
      <section className={`menu ${menuOpened ? 'opened' : ''}`}>
        <div className="logo">
          <span className="red-char">N</span>ikolay <span className="red-char">S</span>tepin
        </div>

        <div className="toggler" onClick={this.toggleMenu}>
          <button className="toggle-menu" >
            {!menuOpened ? 'Открыть' : 'Закрыть'}
          </button>
        </div>
        
        {menuOpened && <MenuList list={menuList} handleClick={this.toggleMenu}/>}
      </section>
    )
  }
}