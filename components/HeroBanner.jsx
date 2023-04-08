import React from 'react';
import Link from 'next/link';
// import imgBanner from '../public/assets/mainBanner';

const HeroBanner = () => {
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">Beats Solo Air</p>
        <h3>Summer Sale</h3>
        <img src="" alt="headphones" className="hero-banner-image" />
        <div>
          <Link href="/product/ID">
            <button type="button">Check It</button>
          </Link>
          <div className="desc">
            <h5>Description</h5>
            <p>Best headphones on the market</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
