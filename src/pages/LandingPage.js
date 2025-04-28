import React from 'react';
import { Link } from 'react-router-dom';


const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="overlay">
        <h1 className="company-name">Paradise Nursery</h1>
        <p className="company-description">
          Welcome to Paradise Nursery! We offer a beautiful collection of aromatic, medicinal, and ornamental plants to make your home greener and healthier.
        </p>
        <Link to="/products" className="btn btn-success btn-lg">Get Started</Link>
      </div>
    </div>
  );
};

export default LandingPage;
