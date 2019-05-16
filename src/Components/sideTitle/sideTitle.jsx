import React from 'react';

import './sideTitle.css';

function correctText(text) {
  return text.split(' ').map(word => (
    <span key={word.toLowerCase()}><span className='red-char'>{word.charAt(0)}</span>{word.slice(1) + ' '}</span>
  ))
}

const SideTitle = ({ titleText }) => (
  <div className="side-title">
    <h1>{correctText(titleText)}</h1>
  </div>
)

export default SideTitle;