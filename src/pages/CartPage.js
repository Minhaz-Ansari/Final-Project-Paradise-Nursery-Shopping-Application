import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from '../components/CartItem';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const cartItems = useSelector(state => state.cart.cartItems);
  const getTotalItems = () => cartItems.reduce((total, item) => total + item.quantity, 0);
  const getTotalCost = () => cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  if (cartItems.length === 0) {
    return (
      <div className="container mt-5 text-center">
        <h2>Your cart is empty!</h2>
        <Link to="/products" className="btn btn-success mt-3">Continue Shopping</Link>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h2>Shopping Cart</h2>
      <p>Total Items: {getTotalItems()}</p>
      <p>Total Cost: ${getTotalCost().toFixed(2)}</p>
      <div className="row">
        {cartItems.map((item) => (
          <div className="col-md-6" key={item.id}>
            <CartItem item={item} />
          </div>
        ))}
      </div>
      <div className="mt-4">
        <Link to="/products" className="btn btn-secondary me-3">Continue Shopping</Link>
        <button className="btn btn-success" onClick={() => alert('Checkout coming soon!')}>Checkout</button>
      </div>
    </div>
  );
};

export default CartPage;
