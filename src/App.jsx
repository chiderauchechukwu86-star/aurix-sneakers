import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext'; // Import Provider
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Collection from './components/Collection';
import About from './components/About';
import Contact from './components/Contact';
import CartDrawer from './components/CartDrawer'; // We will build this next
import Footer from './components/Footer';

export default function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-brand-dark text-white font-sans antialiased flex flex-col justify-between">
          <div>
            <Navbar />
            <CartDrawer /> {/* Persistent Interactive Overlay Panel */}
            <main>
              <Routes>
                <Route path="/" element={<Hero />} />
                <Route path="/collection" element={<Collection />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>
          </div>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}