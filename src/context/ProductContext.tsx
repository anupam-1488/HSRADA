import React, { createContext, useContext, useState } from 'react';
import { chocolates as initialChocolates } from '../data/chocolates';
 
export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}
 
interface ProductContextType {
  products: Product[];
  addProduct: (product: Omit<Product, 'id'>) => void;
  updateProduct: (product: Product) => void;
  deleteProduct: (id: number) => void;
}
 
const ProductContext = createContext<ProductContextType | undefined>(undefined);
 
export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>(initialChocolates);
 
  const addProduct = (product: Omit<Product, 'id'>) => {
    const newId = Math.max(...products.map(p => p.id), 0) + 1;
    setProducts([...products, { ...product, id: newId }]);
  };
 
  const updateProduct = (updatedProduct: Product) => {
    setProducts(products.map(product => 
      product.id === updatedProduct.id ? updatedProduct : product
    ));
  };
 
  const deleteProduct = (id: number) => {
    setProducts(products.filter(product => product.id !== id));
  };
 
  return (
<ProductContext.Provider value={{ products, addProduct, updateProduct, deleteProduct }}>
      {children}
</ProductContext.Provider>
  );
};
 
export const useProducts = () => {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
};