import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

export default function CartDrawer() {
  const { cartItems, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart, cartTotal, clearCart } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  if (!isCartOpen) return null;

  const handleCheckout = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate secure, automated node payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setPaymentSuccess(true);
      setTimeout(() => {
        setPaymentSuccess(false);
        clearCart();
        setIsCartOpen(false);
      }, 3000);
    }, 2500);
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex justify-end animate-fadeIn">
      {/* Structural Modal Backdrop click dismiss */}
      <div className="absolute inset-0" onClick={() => !isProcessing && setIsCartOpen(false)} />

      {/* Cart Container Interface */}
      <div className="relative w-full max-w-md bg-brand-card border-l border-gray-900 h-full p-6 flex flex-col justify-between z-10 shadow-2xl">
        
        {/* Top Header Section */}
        <div>
          <div className="flex justify-between items-center border-b border-gray-900 pb-4 mb-6">
            <h3 className="text-sm font-black tracking-widest uppercase">// CART QUEUE</h3>
            <button 
              onClick={() => setIsCartOpen(false)} 
              disabled={isProcessing}
              className="text-gray-500 hover:text-white font-bold text-xs cursor-pointer disabled:opacity-30"
            >
              CLOSE ✕
            </button>
          </div>

          {/* Success Terminal Status */}
          {paymentSuccess ? (
            <div className="border border-brand-purple/40 bg-brand-purple/10 p-6 text-center space-y-2 rounded-sm mt-12">
              <span className="text-brand-purple text-xs font-black tracking-widest block uppercase">// TRANSACT SUCCESS</span>
              <p className="text-gray-400 text-xs leading-relaxed">Payment verified. Your production batch assignment is locked.</p>
            </div>
          ) : cartItems.length === 0 ? (
            <div className="text-center text-gray-500 text-xs py-12">Your terminal inventory is currently empty.</div>
          ) : (
            /* Items Stack Container */
            <div className="space-y-4 max-h-[50vh] overflow-y-auto pr-2">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center gap-4 bg-brand-dark/40 border border-gray-900 p-3 rounded-sm">
                  <img src={item.img} alt={item.name} className="w-14 h-14 object-contain" />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-bold uppercase truncate text-white">{item.name}</h4>
                    <p className="text-brand-purple text-xs font-mono mt-0.5">{item.price}</p>
                  </div>
                  
                  {/* Quantity Toggles */}
                  <div className="flex items-center border border-gray-800 rounded-sm bg-brand-dark">
                    <button onClick={() => updateQuantity(item.id, -1)} disabled={isProcessing} className="px-2 py-1 text-xs hover:bg-gray-900 text-gray-400">-</button>
                    <span className="px-2 text-xs font-bold text-white text-center min-w-6">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, 1)} disabled={isProcessing} className="px-2 py-1 text-xs hover:bg-gray-900 text-gray-400">+</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Dynamic Payment Gate Section */}
        {!paymentSuccess && cartItems.length > 0 && (
          <div className="border-t border-gray-900 pt-4 space-y-4">
            <div className="flex justify-between items-center text-sm font-black">
              <span className="tracking-widest uppercase">AGGREGATE TOTAL:</span>
              <span className="text-brand-purple font-mono">${cartTotal.toFixed(2)}</span>
            </div>

            <form onSubmit={handleCheckout} className="space-y-3">
              <div className="space-y-2">
                <label className="block text-[9px] font-bold text-gray-500 uppercase tracking-widest">Mock Encrypted Card Interface</label>
                <input 
                  type="text" 
                  required 
                  disabled={isProcessing}
                  maxLength="19"
                  placeholder="4111 •••• •••• ••••" 
                  className="w-full bg-brand-dark border border-gray-800 focus:border-brand-purple focus:outline-none p-2.5 text-xs font-mono text-white rounded-sm transition-colors"
                />
              </div>

              <button 
                type="submit"
                disabled={isProcessing}
                className="w-full bg-brand-purple hover:bg-purple-700 transition-all duration-300 text-white font-bold text-xs uppercase tracking-widest py-3.5 shadow-lg shadow-brand-purple/10 flex justify-center items-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isProcessing ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-3 w-3 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    VERIFYING LEDGER...
                  </span>
                ) : `AUTHORIZE PAYMENT — $${cartTotal.toFixed(2)}`}
              </button>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}