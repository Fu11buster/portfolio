import React from 'react';

import './work.css';

const Work = ({title, description, link, bgImage, logo}) => (
  <li>
    <article className="work" style={{backgroundImage: `url(${bgImage})`}}>
      <a href={link} className="work__link">
        <h3>{title}</h3>
        <p>{description}</p>
        <img src={logo} alt={`${title} logo`} className="work__logo" />
      </a>
    </article>
  </li>
)

export default Work;