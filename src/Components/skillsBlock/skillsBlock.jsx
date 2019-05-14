import React, { Component } from 'react';
import SkillsList from '../skillsList/skillsList';

import './skillsBlock.css';

const SKILLS = {
  frontend: {
    title: 'Front-end',
    skills: [
      'Html5',
      'CSS, SASS, LESS, BEM',
      'vanilla javaScript (ES6, ES7)',
      'React.js, Redux',
      'AJAX, JSON, REST'
    ]
  },
  backend: {
    title: 'Back-end',
    skills: [
      'Node.js (starter lvl, I use it for fast prototyping REST api)',
      'MySQL, MongoDB'
    ]
  },
  tools: {
    title: 'Tools',
    skills: [
      'Git (GitHub)',
      'Webpack',
      'Adobe Photoshop, Avocode',
      'npm',
      'babel'
    ]
  }
}

export default class SkillsBlock extends Component {
  state = {
    currentCategory: 'frontend'
  }

  handleClick = (event) => {
    this.setState({
      currentCategory: event.target.dataset.category
    })
  }

  render() {
    const {currentCategory} = this.state;
    return(
      <section className="skills-block">
        <h2>My skills:</h2>
        <ul className="skillsNav">
          {Object.keys(SKILLS).map(item => (
            <li key={item} data-category={item} className={item === currentCategory ? 'active' : null} onClick={this.handleClick}>{SKILLS[item].title}</li>
          ))}
        </ul>
        <SkillsList skillsArray={SKILLS[currentCategory].skills}/>
      </section>
    )
  }
}