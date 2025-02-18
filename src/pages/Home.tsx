import React from 'react';
import { Candy } from 'lucide-react';
import ChocolateCard from '../components/ChocolateCard';
import { chocolates } from '../data/chocolates';

function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Candy size={40} className="text-amber-700" />
          <h1 className="text-4xl font-bold text-amber-900">HSRADA Chocolates</h1>
        </div>
        <p className="text-amber-800 text-lg">Indulge in Premium Indian Chocolates</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {chocolates.slice(0, 3).map((chocolate) => (
          <ChocolateCard key={chocolate.id} {...chocolate} />
        ))}
      </div>
    </main>
  );
}

export default Home;