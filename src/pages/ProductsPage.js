import React from 'react';
import PlantCard from '../components/PlantCard';
import { plantsData } from '../data/plants';

const ProductsPage = () => {
  return (
    <div align="center">
      <h2>Aromatic Plants</h2>
      <div  align="center"className="plants-section">
        {plantsData.filter(plant => plant.category === 'Aromatic').map(plant => (
          <PlantCard key={plant.id} plant={plant} />
        ))}
      </div>
      <h2>Medicinal Plants</h2>
      <div  align="center" className="plants-section">
        {plantsData.filter(plant => plant.category === 'Medicinal').map(plant => (
          <PlantCard key={plant.id} plant={plant} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
