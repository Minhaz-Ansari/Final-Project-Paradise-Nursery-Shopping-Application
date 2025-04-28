import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div align="center"className="landing">
      <marquee direction="right" behavior="alternate" width="75%">Welcome to Paradise Nursery!</marquee>
      <p>Your destination for beautiful houseplants.</p>
      <Link to="/products">
        <button>Shop Now</button>
      </Link>
    </div>
  );
};

export default LandingPage;
