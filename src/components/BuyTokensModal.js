import React, { useState, useEffect } from 'react';
import './BuyTokensModal.scss';
import { axiosRequest } from '../utils/axiosHelper';
import image from "../images/estate-chain-mini-logo.png";

const BuyTokensModal = ({ show, onClose, property }) => {
  const [tokens, setTokens] = useState(1);
  const [agree, setAgree] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [txHash, setTxHash] = useState('');
  const [propertyDetails, setPropertyDetails] = useState({})
  const [ethPrice, setEthPrice] = useState('');
  const wallet = `${window.signer.address.slice(0, 6)}...${window.signer.address.slice(-4)}`;
  
  useEffect(() => {
    async function fetchLands() {
      try {
        const response = await axiosRequest({
          baseUrl: "http://localhost:7022",
          endPoint: `/v1/land-token/details/${property}`,
          method: "GET",
        });
        console.log("Fetched land token:", response);
        setPropertyDetails(response.data || []);
        setEthPrice((tokens * response.data.valuations / response.data.token).toFixed(4))
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchLands();
  }, []);

  const handleBuy = async () => {
    try {
      setLoading(true);
      const response = await axiosRequest({
        baseUrl: "http://localhost:7022",
        endPoint: "/v1/land-token/sign",
        method: "PATCH",
        data: { cid: property }
      });
  
      console.log('Buy API response:', response.data);
  
      // Optionally handle txHash or success from the response
      setTxHash(response.data.txHash || '0xABCDEF1234567890');
      setSuccess(true);
  
    } catch (error) {
      console.error('Error buying tokens:', error);
      alert('Something went wrong while buying tokens.');
    } finally {
      setLoading(false);
    }
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
              <img src={image} alt="Land" />
              <div>
                <strong>{propertyDetails.title}</strong><br/>
                {propertyDetails.location}<br/>
                {propertyDetails.area} sqft<br/>
                {propertyDetails.priceEth} ETH
              </div>
            </div>
            <form className="buy-form" onSubmit={e => {e.preventDefault(); handleBuy();}}>
              <label>Number of tokens:
                <input type="number" min="1" max={propertyDetails.tokens * propertyDetails.available / 100} value={tokens} onChange={e => setTokens(e.target.value)} placeholder="10" />
              </label>
              <div>ETH Equivalent: <strong>{ethPrice} ETH</strong></div>
              <div>Wallet: <span className="wallet-address">{wallet}</span></div>
              <div className="progress-bar">
                <div className="progress-bar-inner" style={{width: propertyDetails.available + '%'}}></div>
                <span>{propertyDetails.available}% Available</span>
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