import React from 'react';
import { Search, ShoppingCart, User, Heart, MapPin } from 'lucide-react';
import { useApp } from '../context/AppContext';

const Header: React.FC = () => {
  const { state, dispatch } = useApp();
  const cartItemCount = state.cart.reduce((total, item) => total + item.quantity, 0);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'SET_SEARCH_QUERY', payload: e.target.value });
  };

  const handleLoginClick = () => {
    dispatch({ type: 'TOGGLE_LOGIN_MODAL' });
  };

  return (
    <header className="bg-[#2874f0] text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        {/* Top Header */}
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold tracking-tight">Ajkart</h1>
            <span className="text-xs italic text-yellow-300">Explore Plus</span>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for products, brands and more"
                value={state.searchQuery}
                onChange={handleSearchChange}
                className="w-full px-4 py-2.5 pl-12 text-black rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-6">
            {/* Login Button */}
            <button
              onClick={handleLoginClick}
              className="flex items-center space-x-1 hover:bg-blue-600 px-3 py-2 rounded transition-colors"
            >
              <User className="w-4 h-4" />
              <span className="text-sm font-medium">
                {state.user ? state.user.name : 'Login'}
              </span>
            </button>

            {/* Wishlist */}
            <button className="flex items-center space-x-1 hover:bg-blue-600 px-3 py-2 rounded transition-colors">
              <Heart className="w-4 h-4" />
              <span className="text-sm font-medium">Wishlist</span>
            </button>

            {/* Cart */}
            <button className="flex items-center space-x-1 hover:bg-blue-600 px-3 py-2 rounded transition-colors relative">
              <ShoppingCart className="w-4 h-4" />
              <span className="text-sm font-medium">Cart</span>
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-500 text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Address Bar */}
        <div className="flex items-center py-2 border-t border-blue-400">
          <MapPin className="w-4 h-4 mr-2" />
          <span className="text-sm">
            Deliver to: <strong>Chennai 600001</strong>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;