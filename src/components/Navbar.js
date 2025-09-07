import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const cartItems = useSelector(state => state.cart.cartItems);
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  return (
    <nav className="navbar">
      <Link to="/">Paradise Nursery</Link>
      <Link to="/products">Plants</Link>
      <Link to="/cart">
        Cart ({totalItems})
      </Link>
    </nav>
  );
};

export default Navbar;
