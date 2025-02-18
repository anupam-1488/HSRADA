import React from 'react';
import ChocolateCard from '../components/ChocolateCard';
import { chocolates } from '../data/chocolates';

function Products() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-amber-900 mb-8 text-center">Our Chocolate Collection</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {chocolates.map((chocolate) => (
          <ChocolateCard key={chocolate.id} {...chocolate} />
        ))}
      </div>
    </main>
  );
}

export default Products;