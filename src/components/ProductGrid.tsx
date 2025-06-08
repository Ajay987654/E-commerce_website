import React, { useMemo } from 'react';
import ProductCard from './ProductCard';
import { products } from '../data/products';
import { useApp } from '../context/AppContext';

const ProductGrid: React.FC = () => {
  const { state } = useApp();

  const filteredProducts = useMemo(() => {
    let filtered = products;

    // Filter by category
    if (state.selectedCategory !== 'All') {
      filtered = filtered.filter(product => product.category === state.selectedCategory);
    }

    // Filter by search query
    if (state.searchQuery.trim()) {
      const query = state.searchQuery.toLowerCase();
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(query) ||
        product.brand.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [state.selectedCategory, state.searchQuery]);

  if (filteredProducts.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <div className="text-gray-400 mb-4">
            <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.5-.8-6.213-2.146C5.21 13.617 5 14.285 5 15c0 1.657 1.343 3 3 3h8c1.657 0 3-1.343 3-3 0-.715-.21-1.383-.787-2.146z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">No products found</h3>
          <p className="text-gray-500">
            {state.searchQuery 
              ? `No products match "${state.searchQuery}"`
              : `No products available in ${state.selectedCategory}`
            }
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">
          {state.selectedCategory === 'All' ? 'All Products' : state.selectedCategory}
          {state.searchQuery && (
            <span className="text-base font-normal text-gray-600 ml-2">
              - Search results for "{state.searchQuery}"
            </span>
          )}
        </h2>
        <p className="text-gray-600">
          {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'} found
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;