import React, { useState } from 'react';
import './Header.scss';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="header">
      <div className="header-con">
        <div className="logo">
          Logo
        </div>
        <div className="navigation">
          <ul>
            <li>Marketplace</li>
            <li>Tokenize</li>
            <li>Portfolio</li>
          </ul>
        </div>
        <div className="sell">
          <button className="button-primary">Become A Member</button>
        </div>
        <div className="hamburger" onClick={() => setMenuOpen(true)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      {menuOpen && (
        <div className="mobile-nav-popup show">
          <div className="close-icon" onClick={() => setMenuOpen(false)}>&times;</div>
          <ul>
            <li>Marketplace</li>
            <li>Tokenize</li>
            <li>Portfolio</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header; 