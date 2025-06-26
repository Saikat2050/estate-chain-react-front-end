import React, { useState } from 'react';
import './scss/LandMarketplace.scss';
import BuyTokensModal from './BuyTokensModal';
import PropertyDetailsModal from './PropertyDetailsModal';

const property = {
  title: 'Prime Downtown Plot',
  location: 'Manhattan, NY',
  area: 1200,
  priceEth: 2.5,
  tokens: 1000,
  available: 85,
  image: '/images/bg.jpg',
  gallery: [
    '/images/bg.jpg',
    '/images/bg.jpg',
    '/images/bg.jpg',
    '/images/bg.jpg',
    '/images/bg.jpg'
  ],
  for: 'For Sale',
};

const LandMarketplace = () => {
  const [showBuyModal, setShowBuyModal] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false);

  return (
    <div className="land_marketplace">
      <div className="top_header">
        <h2>Land Marketplace</h2>
        <p>Discover tokenized land parcels available for purchase or lease</p>
      </div>
      <div className="land_cards">
        <div className="land_cards_listing">
          <div className="land_image">
            <div className="sale_icon">{property.for}</div>
            <img src={property.image} alt="Land" />
          </div>
          <div className="land_details">
            <div className="land_location">
              <h6>{property.title}</h6>
              <p>{property.location}</p>
            </div>
            <div className="land_price">
              <h6>{property.priceEth} ETH</h6>
              <p>{property.area} sqft</p>
            </div>
            <div className="land_token">
              <p>Tokens: {property.tokens}</p>
              <p>{property.available}% Available</p>
            </div>
            <div className="process_bar">
              <div className="process_bar_completed" style={{width: property.available + '%'}}></div>
            </div>
            <div className="bottom_buy_buttons">
              <button className="button_bg_white" title="Buy tokens for this property" onClick={() => setShowBuyModal(true)}>
                Buy Tokens
              </button>
              <button className="button_bg_yellow" title="View property details" onClick={() => setShowDetailsModal(true)}>
                View Details
              </button>
            </div>
          </div>
        </div>
        <div className="land_cards_listing">
          <div className="land_image">
            <div className="sale_icon">For Lease</div>
            <img src="/images/bg.jpg" alt="Land" />
          </div>
          <div className="land_details">
            <div className="land_location">
              <h6>Prime Downtown Plot</h6>
              <p>Manhattan, NY</p>
            </div>
            <div className="land_price">
              <h6>2.5 ETH</h6>
              <p>1,200 sqft</p>
            </div>
            <div className="land_token">
              <p>Tokens: 1000</p>
              <p>85% Available</p>
            </div>
            <div className="process_bar">
              <div className="process_bar_completed" style={{width: '59%'}}></div>
            </div>
            <div className="bottom_buy_buttons">
              <button className="button_bg_white">Buy Tokens</button>
              <button className="button_bg_yellow">View Details</button>
            </div>
          </div>
        </div>
        <div className="land_cards_listing">
          <div className="land_image">
            <div className="sale_icon">For Sale</div>
            <img src="/images/bg.jpg" alt="Land" />
          </div>
          <div className="land_details">
            <div className="land_location">
              <h6>Prime Downtown Plot</h6>
              <p>Manhattan, NY</p>
            </div>
            <div className="land_price">
              <h6>2.5 ETH</h6>
              <p>1,200 sqft</p>
            </div>
            <div className="land_token">
              <p>Tokens: 1000</p>
              <p>85% Available</p>
            </div>
            <div className="process_bar">
              <div className="process_bar_completed" style={{width: '59%'}}></div>
            </div>
            <div className="bottom_buy_buttons">
              <button className="button_bg_white">Buy Tokens</button>
              <button className="button_bg_yellow">View Details</button>
            </div>
          </div>
        </div>
        <div className="land_cards_listing">
          <div className="land_image">
            <div className="sale_icon">For Sale</div>
            <img src="/images/bg.jpg" alt="Land" />
          </div>
          <div className="land_details">
            <div className="land_location">
              <h6>Prime Downtown Plot</h6>
              <p>Manhattan, NY</p>
            </div>
            <div className="land_price">
              <h6>2.5 ETH</h6>
              <p>1,200 sqft</p>
            </div>
            <div className="land_token">
              <p>Tokens: 1000</p>
              <p>85% Available</p>
            </div>
            <div className="process_bar">
              <div className="process_bar_completed" style={{width: '59%'}}></div>
            </div>
            <div className="bottom_buy_buttons">
              <button className="button_bg_white">Buy Tokens</button>
              <button className="button_bg_yellow">View Details</button>
            </div>
          </div>
        </div>
        <div className="land_cards_listing">
          <div className="land_image">
            <div className="sale_icon">For Sale</div>
            <img src="/images/bg.jpg" alt="Land" />
          </div>
          <div className="land_details">
            <div className="land_location">
              <h6>Prime Downtown Plot</h6>
              <p>Manhattan, NY</p>
            </div>
            <div className="land_price">
              <h6>2.5 ETH</h6>
              <p>1,200 sqft</p>
            </div>
            <div className="land_token">
              <p>Tokens: 1000</p>
              <p>85% Available</p>
            </div>
            <div className="process_bar">
              <div className="process_bar_completed" style={{width: '59%'}}></div>
            </div>
            <div className="bottom_buy_buttons">
              <button className="button_bg_white">Buy Tokens</button>
              <button className="button_bg_yellow">View Details</button>
            </div>
          </div>
        </div>
        <div className="land_cards_listing">
          <div className="land_image">
            <div className="sale_icon">For Sale</div>
            <img src="/images/bg.jpg" alt="Land" />
          </div>
          <div className="land_details">
            <div className="land_location">
              <h6>Prime Downtown Plot</h6>
              <p>Manhattan, NY</p>
            </div>
            <div className="land_price">
              <h6>2.5 ETH</h6>
              <p>1,200 sqft</p>
            </div>
            <div className="land_token">
              <p>Tokens: 1000</p>
              <p>85% Available</p>
            </div>
            <div className="process_bar">
              <div className="process_bar_completed" style={{width: '59%'}}></div>
            </div>
            <div className="bottom_buy_buttons">
              <button className="button_bg_white">Buy Tokens</button>
              <button className="button_bg_yellow">View Details</button>
            </div>
          </div>
        </div>
      </div>
      <BuyTokensModal show={showBuyModal} onClose={() => setShowBuyModal(false)} property={property} />
      <PropertyDetailsModal show={showDetailsModal} onClose={() => setShowDetailsModal(false)} property={property} />
    </div>
  );
};

export default LandMarketplace; 