import React from 'react';
import './scss/StatsCounts.scss';
import missionImg from '../images/estate-chain-image.png';

const StatsCounts = () => (
  <div className="mission-section">
    <div className="mission-content">
      <h2>Why Estate Chain?</h2>
      <p>
        Estate Chain is building a future where land ownership and real estate investment are
        transparent, accessible, and borderless. By tokenizing property assets, we empower
        individuals to trade, invest, and unlock liquidity like never before.
      </p>
      <p>
        Our platform bridges the physical and digital worlds, enabling anyone to participate in
        real estate markets with security, lower costs, and global reach.
      </p>
    </div>
    <div className="mission-image">
      <img src={missionImg} alt="Our Mission" />
    </div>
  </div>
);

export default StatsCounts;
