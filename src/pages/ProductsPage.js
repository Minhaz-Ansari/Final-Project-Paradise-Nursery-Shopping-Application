import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { plantsData } from '../data/plantsData';
import PlantCard from '../components/PlantCard';

const ProductsPage = () => {
  const { cartItems } = useContext(CartContext);

  const categories = ['Aromatic', 'Medicinal'];

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
