import React from 'react';
import { useThemeStore } from '../store/themeStore';

export default function CartItem({ item, onUpdateQuantity, onRemove }) {
  const isDark = useThemeStore((state) => state.isDark);

  return (
    <div
      className={`${
        isDark ? 'bg-gray-800' : 'bg-white'
      } rounded-lg p-4 flex gap-4 shadow border ${
        isDark ? 'border-gray-700' : 'border-gray-200'
      }`}
    >
      <img
        src={item.image}
        alt={item.title}
        className="w-24 h-24 object-contain"
      />

      <div className="flex-1">
        <h3 className="font-semibold mb-2">{item.title}</h3>
        <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          ${item.price.toFixed(2)} each
        </p>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 border rounded">
          <button
            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
            className={`px-3 py-1 ${
              isDark
                ? 'text-gray-300 hover:bg-gray-700'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            −
          </button>
          <span className="w-8 text-center">{item.quantity}</span>
          <button
            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
            className={`px-3 py-1 ${
              isDark
                ? 'text-gray-300 hover:bg-gray-700'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            +
          </button>
        </div>

        <div className="text-right min-w-24">
          <p className="font-bold text-lg">
            ${(item.price * item.quantity).toFixed(2)}
          </p>
        </div>

        <button
          onClick={() => onRemove(item.id)}
          className="text-red-500 hover:text-red-700 font-bold"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
