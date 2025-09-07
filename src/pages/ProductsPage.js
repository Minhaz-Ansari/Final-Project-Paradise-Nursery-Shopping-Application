import React from 'react';
import { useSelector } from 'react-redux';
import { plantsData } from '../data/plantsData';
import PlantCard from '../components/PlantCard';

const ProductsPage = () => {
  const cartItems = useSelector(state => state.cart.cartItems);
  const categories = ['Aromatic', 'Medicinal', 'Ornamental'];

  return (
    <div className="container mt-5">
      {categories.map((category) => (
        <div key={category}>
          <h2 className="mb-4">{category} Plants</h2>
          <div className="row">
            {plantsData.filter(plant => plant.category === category).map((plant) => (
              <div className="col-md-4 mb-4" key={plant.id}>
                <PlantCard plant={plant} disabled={cartItems.some(item => item.id === plant.id)} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsPage;
