import React, { useState } from 'react';
import './BuyTokensModal.scss';

const BuyTokensModal = ({ show, onClose, property }) => {
  const [tokens, setTokens] = useState(1);
  const [agree, setAgree] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [txHash, setTxHash] = useState('');
  const ethPrice = (tokens * property.priceEth / property.tokens).toFixed(4);
  const wallet = '0x1234...abcd'; // Simulated wallet address

  const handleBuy = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setTxHash('0xABCDEF1234567890');
    }, 2000);
  };

  if (!show) return null;
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose} title="Close">✖️</button>
        {!success ? (
          <>
            <h3>Buy Tokens</h3>
            <div className="property-summary">
              <img src={property.image} alt="Land" />
              <div>
                <strong>{property.title}</strong><br/>
                {property.location}<br/>
                {property.area} sqft<br/>
                {property.priceEth} ETH
              </div>
            </div>
            <form className="buy-form" onSubmit={e => {e.preventDefault(); handleBuy();}}>
              <label>Number of tokens:
                <input type="number" min="1" max={property.tokens * property.available / 100} value={tokens} onChange={e => setTokens(e.target.value)} placeholder="10" />
              </label>
              <div>ETH Equivalent: <strong>{ethPrice} ETH</strong></div>
              <div>Wallet: <span className="wallet-address">{wallet}</span></div>
              <div className="progress-bar">
                <div className="progress-bar-inner" style={{width: property.available + '%'}}></div>
                <span>{property.available}% Available</span>
              </div>
              <label className="terms">
                <input type="checkbox" checked={agree} onChange={e => setAgree(e.target.checked)} /> I agree to the Terms & Conditions
              </label>
              <button type="submit" disabled={!agree || loading} className="confirm-btn">
                {loading ? 'Processing...' : 'Confirm & Buy'}
              </button>
            </form>
          </>
        ) : (
          <div className="success-msg">
            <h4>🎉 Purchase Successful!</h4>
            <div>Transaction Hash: <span className="tx-hash">{txHash}</span></div>
            <div>Tokens Allocated: <strong>{tokens}</strong></div>
            <button onClick={onClose}>Close</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BuyTokensModal; 