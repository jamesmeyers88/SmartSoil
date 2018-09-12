import React from 'react';

const Header = ({ title }) => (
  <div className="instructions">
    <div>
      <h1 className="lead" style={{fontSize: '40pt', fontFamily: 'monospace', textShadow: '2px 2px #8b4513'}}>{ title }</h1>
    </div>
  </div>
);

export default Header;
