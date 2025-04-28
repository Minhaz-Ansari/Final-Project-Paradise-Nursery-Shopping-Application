import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartItem = ({ item }) => {
  const { increaseQty, decreaseQty, deleteItem } = useContext(CartContext);

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />
      <h4>{item.name}</h4>
      <p>Unit Price: ${item.price}</p>
      <p>Total: ${item.price * item.quantity}</p>
      <button onClick={() => decreaseQty(item.id)}>-</button>
      <span>{item.quantity}</span>
      <button onClick={() => increaseQty(item.id)}>+</button>
      <button onClick={() => deleteItem(item.id)}>Delete</button>
    </div>
  );
};

export default CartItem;
