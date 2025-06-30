import React, { useState } from 'react';
import './scss/TokenizeLand.scss';
import { axiosRequest } from '../utils/axiosHelper';

const TokenizeLand = () => {
  const [formData, setFormData] = useState({
    title: '',
    location: '',
    area: '',
    valuations: '',
    token: '',
    availability: '100',
    purpose: 'sale',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const generateGuid = () => {
    return Math.random().toString(36).substr(2, 9) + Date.now().toString(36);
  };

  const generateTokenId = () => {
    return Math.random().toString(36).substr(2, 10);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const guid = generateGuid();
    const tokenId = generateTokenId();

    const payload = {
      ...formData,
      area: Number(formData.area),
      valuations: Number(formData.valuations),
      token: Number(formData.token),
      availability: Number(formData.availability),
      guid,
      tokenId,
    };

    try {
      const response = await axiosRequest({
        baseUrl: "http://localhost:7022",
        endPoint: "/v1/land-token/create",
        method: "POST",
        data: payload
      });
      console.log("Land tokenized successfully:", response);

      setSuccess(true);
      setFormData({
        title: '',
        location: '',
        area: '',
        valuations: '',
        token: '',
        availability: '100',
        purpose: 'sale',
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="tokenize_land_container" id="tokenize_section">
      <div className="top_header">
        <h2>Tokenize Your Land</h2>
        <p>Convert your real estate into tradeable digital tokens</p>
      </div>
      <div className="tokenize_land_content">
        <div className="left_col">
          <div className="add_property_form card">
            <h4>Add Your Property</h4>
            <form onSubmit={handleSubmit}>
              <label>
                Property Title
                <input
                  type="text"
                  name="title"
                  placeholder="Enter property title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Location
                <input
                  type="text"
                  name="location"
                  placeholder="Enter property location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                />
              </label>
              <div className="row">
                <div className="col">
                  <label>
                    Area (sqft)
                    <input
                      type="number"
                      name="area"
                      placeholder="1,200"
                      value={formData.area}
                      onChange={handleChange}
                      required
                    />
                  </label>
                </div>
                <div className="col">
                  <label>
                    Valuation (ETH)
                    <input
                      type="number"
                      step="0.01"
                      name="valuations"
                      placeholder="5.0"
                      value={formData.valuations}
                      onChange={handleChange}
                      required
                    />
                  </label>
                </div>
              </div>
              <label>
                Total Tokens
                <input
                  type="number"
                  name="token"
                  placeholder="1000"
                  value={formData.token}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Availability (%)
                <input
                  type="number"
                  name="availability"
                  placeholder="e.g. 85"
                  value={formData.availability}
                  onChange={handleChange}
                />
              </label>
              <label>
                Purpose
                <select
                  name="purpose"
                  value={formData.purpose}
                  onChange={handleChange}
                >
                  <option value="sale">Sale</option>
                  <option value="lease">Lease</option>
                </select>
              </label>
              <button
                type="submit"
                className="button_bg_white"
                disabled={loading}
              >
                {loading ? 'Submitting...' : 'Submit'}
              </button>
            </form>
            {success && (
              <p style={{ color: 'lightgreen', marginTop: '10px' }}>
                Property tokenization request submitted successfully!
              </p>
            )}
            {error && (
              <p style={{ color: 'tomato', marginTop: '10px' }}>{error}</p>
            )}
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
              <li>
                <span className="step_circle step1">1</span> Submit property details and documentation
              </li>
              <li>
                <span className="step_circle step2">2</span> Property verification and valuation
              </li>
              <li>
                <span className="step_circle step3">3</span> Smart contract creation and token minting
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenizeLand;
