import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const Navbar = () => {
  const { getTotalItems } = useContext(CartContext);

  return (
    <nav className="navbar">
      <Link to="/">Paradise Nursery</Link>
      <Link to="/products">Plants</Link>
      <Link to="/cart">
        Cart ({getTotalItems()})
      </Link>
    </nav>
  );
};

export default Navbar;
