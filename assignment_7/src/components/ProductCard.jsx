import React, { useState, useEffect } from 'react';
import { useThemeStore } from '../store/themeStore';

export default function ProductCard({ product, onAddToCart }) {
  const isDark = useThemeStore((state) => state.isDark);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    onAddToCart(product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div
      className={`${
        isDark
          ? 'bg-gray-800 text-white hover:bg-gray-700'
          : 'bg-white text-gray-900 hover:shadow-lg'
      } rounded-lg overflow-hidden shadow transition transform hover:scale-105`}
    >
      <div className="h-48 bg-gray-100 overflow-hidden flex items-center justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-contain p-4"
        />
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-sm mb-2 line-clamp-2">
          {product.title}
        </h3>

        <div className="flex items-center justify-between mb-3">
          <span className="text-lg font-bold text-blue-600">
            ${product.price.toFixed(2)}
          </span>
          <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">
            ★ {product.rating?.rate?.toFixed(1) || 'N/A'}
          </span>
        </div>

        <button
          onClick={handleAddToCart}
          className={`w-full py-2 rounded transition ${
            isAdded
              ? 'bg-green-600 text-white'
              : isDark
              ? 'bg-blue-600 hover:bg-blue-700 text-white'
              : 'bg-blue-600 hover:bg-blue-700 text-white'
          }`}
        >
          {isAdded ? '✓ Added!' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
}
