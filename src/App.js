import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import MainBanner from './components/MainBanner';
import StatsCounts from './components/StatsCounts';
import LandMarketplace from './components/LandMarketplace';
import TokenizeLand from './components/TokenizeLand';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <MainBanner />
      <div className="bottom_section" id="bottom_section">
        <div className="main">
          <StatsCounts />
          <LandMarketplace />
          <TokenizeLand />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
