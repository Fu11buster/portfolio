import React from 'react';
import './container.css';

const Container = ({children}) => (
  <div onWheel={(e) => {console.log(e.deltaY)}} className="container">
    {children}
  </div>
)

export default Container;