import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Header from './components/Header';
import CategoryNav from './components/CategoryNav';
import ProductGrid from './components/ProductGrid';
import Cart from './components/Cart';
import LoginModal from './components/LoginModal';
import Footer from './components/Footer';

function App() {
  return (
    <AppProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Header />
          <CategoryNav />
          
          <main className="min-h-screen">
            <Routes>
              <Route path="/" element={<ProductGrid />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </main>
          
          <Footer />
          <LoginModal />
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;