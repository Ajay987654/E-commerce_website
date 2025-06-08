import React from 'react';
import { categories } from '../data/products';
import { useApp } from '../context/AppContext';
import * as Icons from 'lucide-react';

const CategoryNav: React.FC = () => {
  const { state, dispatch } = useApp();

  const handleCategorySelect = (categoryName: string) => {
    dispatch({ type: 'SET_SELECTED_CATEGORY', payload: categoryName });
  };

  const getIcon = (iconName: string) => {
    const IconComponent = Icons[iconName as keyof typeof Icons] as React.ComponentType<any>;
    return IconComponent ? <IconComponent className="w-5 h-5" /> : <Icons.Package className="w-5 h-5" />;
  };

  return (
    <nav className="bg-white shadow-sm border-b sticky top-[120px] z-40">
      <div className="container mx-auto px-4">
        <div className="flex items-center space-x-8 py-3 overflow-x-auto scrollbar-hide">
          <button
            onClick={() => handleCategorySelect('All')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all ${
              state.selectedCategory === 'All'
                ? 'bg-blue-50 text-blue-600 border border-blue-200'
                : 'hover:bg-gray-50 text-gray-700'
            }`}
          >
            <Icons.Grid3X3 className="w-5 h-5" />
            <span className="font-medium">All Categories</span>
          </button>
          
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategorySelect(category.name)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all ${
                state.selectedCategory === category.name
                  ? 'bg-blue-50 text-blue-600 border border-blue-200'
                  : 'hover:bg-gray-50 text-gray-700'
              }`}
            >
              {getIcon(category.icon)}
              <span className="font-medium">{category.name}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default CategoryNav;