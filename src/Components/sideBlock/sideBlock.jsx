import React from 'react';
import ScrollBLock from '../scrollBlock/scrollBlock';


import './sideBlock.css';

const SideBlock = ({children}) => (
  <div className="side-block">
    {children}
    <ScrollBLock />
  </div>
)

export default SideBlock;