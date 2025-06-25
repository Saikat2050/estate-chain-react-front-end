import React from 'react';
import './TokenizeLand.scss';

const TokenizeLand = () => (
  <div className="tokenize_land_container">
    <div className="top_header">
      <h2>Land Marketplace</h2>
      <p>Discover tokenized land parcels available for purchase or lease</p>
    </div>
    <div className="tokenize_land_content">
      <div className="left_col">
        <div className="add_property_form card">
          <h4>Add Your Property</h4>
          <form>
            <label>Property Title
              <input type="text" placeholder="Enter property title" />
            </label>
            <label>Location
              <input type="text" placeholder="Enter property location" />
            </label>
            <div className="row">
              <div className="col">
                <label>Area (sqft)
                  <input type="text" placeholder="1,200" />
                </label>
              </div>
              <div className="col">
                <label>Valuation (ETH)
                  <input type="text" placeholder="5.0" />
                </label>
              </div>
            </div>
            <label>Total Tokens
              <input type="text" placeholder="1000" />
            </label>
            <input type="submit" value="" style={{display: 'none'}} />
          </form>
        </div>
      </div>
      <div className="right_col">
        <div className="benefits card">
          <h4>Benefits of Tokenization</h4>
          <ul>
            <li>Fractional ownership enables smaller investors</li>
            <li>24/7 trading on global markets</li>
            <li>Transparent ownership records on blockchain</li>
            <li>Instant liquidity for real estate assets</li>
          </ul>
        </div>
        <div className="process_steps card">
          <h4>Process Steps</h4>
          <ol>
            <li><span className="step_circle step1">1</span> Submit property details and documentation</li>
            <li><span className="step_circle step2">2</span> Property verification and valuation</li>
            <li><span className="step_circle step3">3</span> Smart contract creation and token minting</li>
          </ol>
        </div>
      </div>
    </div>
  </div>
);

export default TokenizeLand; 