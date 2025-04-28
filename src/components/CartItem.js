import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartItem = ({ item }) => {
  const { increaseQty, decreaseQty, removeFromCart } = useContext(CartContext);

  return (
    <div className="card mb-3">
      <div className="row g-0 align-items-center">
        <div className="col-5">
          <img src={item.image} alt={item.name} className="img-fluid rounded-start" />
        </div>
        <div className="col-7">
          <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">Unit Price: ${item.price}</p>
            <p className="card-text">Total: ${(item.price * item.quantity).toFixed(2)}</p>
            <div className="d-flex align-items-center mb-2">
              <button className="btn btn-outline-secondary me-2" onClick={() => decreaseQty(item.id)}>-</button>
              <span>{item.quantity}</span>
              <button className="btn btn-outline-secondary ms-2" onClick={() => increaseQty(item.id)}>+</button>
            </div>
            <button className="btn btn-danger" onClick={() => removeFromCart(item.id)}>Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
