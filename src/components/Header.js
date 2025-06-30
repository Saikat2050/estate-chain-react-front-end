import React, { useState, useEffect } from "react";
import "./scss/Header.scss";
import image from "../images/estate-chain-mini-logo.png";
import { BrowserProvider } from "ethers";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [account, setAccount] = useState(null);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const connectWallet = async () => {
    if (window.ethereum) {
      const provider = new BrowserProvider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = await provider.getSigner();
      const address = await signer.getAddress();
      setAccount(address);

      localStorage.setItem("connectedAddress", address);
      window.signer = signer;
    } else {
      alert("Please install MetaMask!");
    }
  };

  const reconnectWallet = async () => {
    const savedAddress = localStorage.getItem("connectedAddress");
    if (savedAddress && window.ethereum) {
      const provider = new BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const address = await signer.getAddress();

      if (address.toLowerCase() === savedAddress.toLowerCase()) {
        setAccount(address);
        window.signer = signer;
      }
    }
  };

  useEffect(() => {
    reconnectWallet();
  }, []);

  return (
    <div className="header">
      <div className="header-con">
        <div className="logo">
          <img src={image} alt="Estate Chain Logo" className="logo-img"></img>
          <span className="logo-text">Estate Chain</span>
        </div>
        <div className="navigation">
          <ul>
            <li>
              <button onClick={() => scrollToSection("marketplace")}>
                Marketplace
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("tokenize")}>
                Tokenize
              </button>
            </li>
          </ul>
        </div>
        <div className="sell">
          <button className="button_bg_yellow" onClick={connectWallet}>
            {account
              ? `Connected: ${account.slice(0, 6)}...${account.slice(-4)}`
              : "Connect Wallet"}
          </button>
        </div>
        <div className="hamburger" onClick={() => setMenuOpen(true)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      {menuOpen && (
        <div className="mobile-nav-popup show">
          <div className="close-icon" onClick={() => setMenuOpen(false)}>
            &times;
          </div>
          <ul>
            <li>
              <button onClick={() => scrollToSection("marketplace")}>
                Marketplace
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("tokenize")}>
                Tokenize
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
