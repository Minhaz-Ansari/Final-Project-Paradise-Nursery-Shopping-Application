import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import CartItem from '../components/CartItem';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const { cart, getTotalCost } = useContext(CartContext);

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Cart is empty.</p>
      ) : (
        cart.map(item => <CartItem key={item.id} item={item} />)
      )}
      <h3>Total Cost: ${getTotalCost()}</h3>
      <Link to="/products"><button>Continue Shopping</button></Link>
      <button>Checkout</button>
    </div>
  );
};

export default CartPage;
