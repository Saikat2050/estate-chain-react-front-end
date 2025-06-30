import React from 'react';
import './scss/MainBanner.scss';

const MainBanner = () => {
  const scrollToMarketplace = () => {
    const el = document.getElementById('marketplace');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTokenize = () => {
    const el = document.getElementById('tokenize');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="main_banner">
      <div className="main_banner_content">
        <h1>Tokenize Your Land</h1>
        <p>Transform real estate into digital assets. Buy, sell, and trade fractional ownership of land parcels on the blockchain.</p>
        <div className="bottom_buttons">
          <button className="button_bg_yellow" onClick={scrollToMarketplace}>
            Marketplace
          </button>
          <button className="button_bg_yellow" onClick={scrollToTokenize}>
            Tokenize
          </button>
        </div>
      </div>
      <div className="section_down_arrow" id="section_down_arrow">
        <a href="#section_down_arrow">
          <img src="/images/arrow_down.gif" title="down" width="70" height="70" alt="down icon" />
        </a>
      </div>
    </div>
  );
};

export default MainBanner;
