import React from 'react';
import { Link } from 'react-router-dom';
import { useCartStore } from '../store/cartStore';
import { useThemeStore } from '../store/themeStore';

export default function Header() {
  const items = useCartStore((state) => state.items);
  const isDark = useThemeStore((state) => state.isDark);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header
      className={`${
        isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
      } shadow-md`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-blue-600">
            ShopHub
          </Link>

          <div className="flex items-center gap-6">
            <Link
              to="/"
              className={`${
                isDark
                  ? 'hover:text-blue-400'
                  : 'hover:text-blue-600'
              } transition`}
            >
              Products
            </Link>

            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg ${
                isDark
                  ? 'bg-gray-700 hover:bg-gray-600'
                  : 'bg-gray-200 hover:bg-gray-300'
              } transition`}
              aria-label="Toggle theme"
            >
              {isDark ? '☀️' : '🌙'}
            </button>

            <Link
              to="/cart"
              className={`relative px-4 py-2 rounded-lg ${
                isDark
                  ? 'bg-blue-600 hover:bg-blue-700'
                  : 'bg-blue-600 hover:bg-blue-700'
              } text-white transition`}
            >
              Cart
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
