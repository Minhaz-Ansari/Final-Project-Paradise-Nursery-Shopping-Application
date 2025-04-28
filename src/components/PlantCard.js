import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const PlantCard = ({ plant, disabled }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="card h-100">
      <img src={plant.image} className="card-img-top" alt={plant.name} style={{ height: '200px', objectFit: 'cover' }} />
      <div className="card-body text-center">
        <h5 className="card-title">{plant.name}</h5>
        <p className="card-text">${plant.price}</p>
        <button
          className="btn btn-success"
          disabled={disabled}
          onClick={() => addToCart(plant)}
        >
          {disabled ? "Added" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default PlantCard;
