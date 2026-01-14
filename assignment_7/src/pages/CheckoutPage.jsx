import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCartStore } from '../store/cartStore';
import { useThemeStore } from '../store/themeStore';
import CheckoutForm from '../components/CheckoutForm';

export default function CheckoutPage() {
  const navigate = useNavigate();
  const isDark = useThemeStore((state) => state.isDark);
  const items = useCartStore((state) => state.items);
  const clearCart = useCartStore((state) => state.clearCart);
  const [loading, setLoading] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  const handleCheckout = async (formData) => {
    setLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setLoading(false);
    setOrderSuccess(true);

    // Clear cart and redirect after 3 seconds
    clearCart();
    setTimeout(() => {
      navigate('/');
    }, 3000);
  };

  if (items.length === 0 && !orderSuccess) {
    return (
      <div
        className={`min-h-screen ${isDark ? 'bg-gray-900 text-white' : 'bg-white'}`}
      >
        <div className="max-w-4xl mx-auto px-4 py-8 text-center">
          <h1 className="text-3xl font-bold mb-4">Checkout</h1>
          <p className={`text-lg mb-8 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Your cart is empty
          </p>
          <button
            onClick={() => navigate('/')}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3 rounded-lg"
          >
            Back to Shopping
          </button>
        </div>
      </div>
    );
  }

  if (orderSuccess) {
    return (
      <div
        className={`min-h-screen ${isDark ? 'bg-gray-900 text-white' : 'bg-white'} flex items-center justify-center`}
      >
        <div className="text-center">
          <div className="mb-6">
            <div className="w-24 h-24 bg-green-600 rounded-full flex items-center justify-center mx-auto">
              <span className="text-4xl">✓</span>
            </div>
          </div>
          <h1 className="text-3xl font-bold mb-4">Order Confirmed!</h1>
          <p className={`text-lg mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Thank you for your purchase. Your order has been placed successfully.
          </p>
          <p className={`text-sm mb-8 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
            Redirecting to home page...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen ${isDark ? 'bg-gray-900 text-white' : 'bg-gray-50'}`}
    >
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <CheckoutForm onSubmit={handleCheckout} loading={loading} />
          </div>

          {/* Order Summary */}
          <div
            className={`${
              isDark ? 'bg-gray-800' : 'bg-white'
            } rounded-lg p-6 shadow-md h-fit sticky top-20`}
          >
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>

            <div className="space-y-3 mb-6 max-h-96 overflow-y-auto">
              {items.map((item) => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span>
                    {item.title.substring(0, 30)}... x{item.quantity}
                  </span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>

            <div
              className={`border-b ${isDark ? 'border-gray-700' : 'border-gray-300'} pb-4 mb-4 space-y-3`}
            >
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Tax (10%)</span>
                <span>${tax.toFixed(2)}</span>
              </div>
            </div>

            <div className="flex justify-between text-xl font-bold">
              <span>Total</span>
              <span className="text-blue-600">${total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
