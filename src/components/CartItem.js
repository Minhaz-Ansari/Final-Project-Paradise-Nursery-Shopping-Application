import React from 'react';
import { useDispatch } from 'react-redux';
import { increaseQty, decreaseQty, removeFromCart } from '../cartSlice';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
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
              <button className="btn btn-outline-secondary me-2" onClick={() => dispatch(decreaseQty(item.id))}>-</button>
              <span>{item.quantity}</span>
              <button className="btn btn-outline-secondary ms-2" onClick={() => dispatch(increaseQty(item.id))}>+</button>
            </div>
            <button className="btn btn-danger" onClick={() => dispatch(removeFromCart(item.id))}>Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
