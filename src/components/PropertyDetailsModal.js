import React, { useState } from 'react';
import './PropertyDetailsModal.scss';

const PropertyDetailsModal = ({ show, onClose, property }) => {
  const [currentImg, setCurrentImg] = useState(0);
  if (!show) return null;
  const gallery = property.gallery || [property.image];
  const hasMultiple = gallery.length > 1;
  const prevImg = () => setCurrentImg((prev) => (prev === 0 ? gallery.length - 1 : prev - 1));
  const nextImg = () => setCurrentImg((prev) => (prev === gallery.length - 1 ? 0 : prev + 1));
  return (
    <div className="modal-overlay">
      <div className="modal-content details-modal">
        <button className="modal-close" onClick={onClose} title="Close">✖️</button>
        <div className="property-gallery">
          {hasMultiple && (
            <button className="gallery-arrow left" onClick={prevImg} aria-label="Previous image">&#x2039;</button>
          )}
          <div className="gallery-image-wrapper">
            <img src={gallery[currentImg]} alt="Property" />
          </div>
          {hasMultiple && (
            <button className="gallery-arrow right" onClick={nextImg} aria-label="Next image">&#x203A;</button>
          )}
          {hasMultiple && (
            <div className="gallery-dots">
              {gallery.map((_, idx) => (
                <span
                  key={idx}
                  className={idx === currentImg ? 'dot active' : 'dot'}
                  onClick={() => setCurrentImg(idx)}
                />
              ))}
            </div>
          )}
        </div>
        <div className="token-metrics">
          <h4>Token Metrics</h4>
          <div className="metrics-table">
            <div><span>Total Tokens:</span><span>1000</span></div>
            <div><span>Available Tokens:</span><span>850</span></div>
            <div><span>Token Price:</span><span>0.0025 ETH</span></div>
            <div><span>Property Size:</span><span>1200 sqft</span></div>
          </div>
        </div>
        <div className="documents-legal">
          <h4>Documents & Legal</h4>
          <ul>
            <li>Land Title Document <a href="#" download>Download PDF</a></li>
            <li>Ownership Certificate <a href="#" download>Download</a></li>
          </ul>
        </div>
        <div className="estimated-returns">
          <h4>Estimated Returns</h4>
          <div>Rental Yield: <b>6.5% per annum</b></div>
          <div>Lock-in Period: <b>12 months</b></div>
        </div>
        <div className="contact-cta">
          <div className="tooltip">Need more info? Reach us at <a href="mailto:contact@estate.com">contact@estate.com</a></div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailsModal; 