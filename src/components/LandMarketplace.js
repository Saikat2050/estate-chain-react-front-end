import React, { useState, useEffect } from "react";
import "./scss/LandMarketplace.scss";
import BuyTokensModal from "./BuyTokensModal";
import PropertyDetailsModal from "./PropertyDetailsModal";
import { axiosRequest } from "../utils/axiosHelper";

const LandMarketplace = () => {
  const [lands, setLands] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [showBuyModal, setShowBuyModal] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);

  useEffect(() => {
    async function fetchLands() {
      try {
        const response = await axiosRequest({
          baseUrl: "http://localhost:7022",
          endPoint: "/v1/land-token/list",
          method: "GET",
        });
        console.log("Fetched lands:", response);
        setLands(response.data || []);
      } catch (err) {
        console.error(err);
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    }

    fetchLands();
  }, []);

  const handleBuyTokens = (property) => {
    setSelectedProperty(property);
    setShowBuyModal(true);
  };

  const handleViewDetails = (property) => {
    setSelectedProperty(property);
    setShowDetailsModal(true);
  };

  if (loading) return <div>Loading land listings...</div>;
  if (error) return <div>Error loading lands: {error}</div>;

  return (
    <div className="land_marketplace" id="marketplace">
      <div className="top_header">
        <h2>Land Marketplace</h2>
        <p>Discover tokenized land parcels available for purchase or lease</p>
      </div>

      <div className="land_cards">
        {lands.map((property, index) => (
          <div className="land_cards_listing" key={property.tokenId || index}>
            <div className="land_image">
              <div className="sale_icon">
                {property.purpose === "lease" ? "For Lease" : "For Sale"}
              </div>
              <img
                src="/images/bg.jpg"
                alt={property.title}
                // Optionally replace with dynamic images in future:
                // src={property.imageUrl || "/images/bg.jpg"}
              />
            </div>
            <div className="land_details">
              <div className="land_location">
                <h6>{property.title}</h6>
                <p>{property.location}</p>
              </div>
              <div className="land_price">
                <h6>{property.valuations} ETH</h6>
                <p>{property.area?.toLocaleString()} sqft</p>
              </div>
              <div className="land_token">
                <p>Tokens: {property.token}</p>
                <p>{property.availability}% Available</p>
              </div>
              <div className="process_bar">
                <div
                  className="process_bar_completed"
                  style={{ width: `${property.availability}%` }}
                ></div>
              </div>
              <div className="bottom_buy_buttons">
                <button
                  className="button_bg_white"
                  onClick={() => handleBuyTokens(property.cid || "bafkreidxfd74cxujw4idmfgvio4vu4v2pyee24nemzlueffue5wmkyltk4")}
                  title="Buy tokens for this property"
                >
                  Buy Tokens
                </button>
                {/* <button
                  className="button_bg_yellow"
                  onClick={() => handleViewDetails(property)}
                  title="View property details"
                >
                  View Details
                </button> */}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modals */}
      {selectedProperty && (
        <>
          <BuyTokensModal
            show={showBuyModal}
            onClose={() => setShowBuyModal(false)}
            property={selectedProperty}
          />
          <PropertyDetailsModal
            show={showDetailsModal}
            onClose={() => setShowDetailsModal(false)}
            property={selectedProperty}
          />
        </>
      )}
    </div>
  );
};

export default LandMarketplace;
