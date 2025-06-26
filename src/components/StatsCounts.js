import React from 'react';
import './scss/StatsCounts.scss';

const StatsCounts = () => (
  <div className="no_count">
    <div className="counts">
      <h2>$2.4B</h2>
      <p>Total Value Tokenized</p>
    </div>
    <div className="counts">
      <h2>12,847</h2>
      <p>Properties Listed</p>
    </div>
    <div className="counts">
      <h2>45,923 </h2>
      <p>Active Investors </p>
    </div>
    <div className="counts">
      <h2>98.7% </h2>
      <p>Transaction Success Rate </p>
    </div>
  </div>
);

export default StatsCounts; 