import React from 'react';
import { Award, Heart, Leaf } from 'lucide-react';

function About() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-amber-900 mb-8 text-center">About HSRADA Chocolates</h1>
        
        <div className="prose prose-amber mx-auto">
          <p className="text-lg text-amber-800 mb-6">
            HSRADA Chocolates is a premium Indian chocolate brand that combines traditional flavors with modern craftsmanship. 
            Founded in 2024, we've dedicated ourselves to creating exceptional chocolate experiences using the finest ingredients.
          </p>

          <div className="grid md:grid-cols-3 gap-8 my-12">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <Award className="mx-auto text-amber-700 mb-4" size={40} />
              <h3 className="text-xl font-semibold text-amber-900 mb-2">Premium Quality</h3>
              <p className="text-amber-700">Finest ingredients and expert craftsmanship in every piece</p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <Heart className="mx-auto text-amber-700 mb-4" size={40} />
              <h3 className="text-xl font-semibold text-amber-900 mb-2">Made with Love</h3>
              <p className="text-amber-700">Handcrafted with passion and attention to detail</p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <Leaf className="mx-auto text-amber-700 mb-4" size={40} />
              <h3 className="text-xl font-semibold text-amber-900 mb-2">Sustainable</h3>
              <p className="text-amber-700">Committed to ethical sourcing and eco-friendly practices</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-amber-900 mb-4">Our Story</h2>
          <p className="text-lg text-amber-800 mb-6">
            At HSRADA, we believe that chocolate is more than just a treat – it's an art form. Our master chocolatiers 
            combine traditional Indian flavors with the finest Belgian chocolate techniques to create unique, memorable experiences.
          </p>

          <h2 className="text-2xl font-bold text-amber-900 mb-4">Our Commitment</h2>
          <p className="text-lg text-amber-800 mb-6">
            We're committed to sustainability and ethical sourcing. All our cocoa is responsibly sourced, and we work 
            directly with farmers to ensure fair practices and the highest quality ingredients.
          </p>
        </div>
      </div>
    </main>
  );
}

export default About;