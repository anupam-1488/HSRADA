import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface ChocolateCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

const ChocolateCard: React.FC<ChocolateCardProps> = ({ id, name, price, image, description }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105">
      <img 
        src={image} 
        alt={name} 
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-amber-900 mb-2">{name}</h3>
        <p className="text-amber-700 mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-amber-900">₹{price}</span>
          <button 
            onClick={() => addToCart({ id, name, price, image })}
            className="bg-amber-700 text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-amber-800 transition-colors"
          >
            <ShoppingBag size={20} />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChocolateCard;