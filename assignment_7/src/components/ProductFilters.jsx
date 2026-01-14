import React from 'react';
import { useThemeStore } from '../store/themeStore';

export default function ProductFilters({
  categories,
  selectedCategory,
  onCategoryChange,
  minPrice,
  maxPrice,
  onPriceChange,
  searchTerm,
  onSearchChange,
  sortBy,
  onSortChange,
}) {
  const isDark = useThemeStore((state) => state.isDark);

  return (
    <div
      className={`${
        isDark
          ? 'bg-gray-800 text-white'
          : 'bg-white text-gray-900'
      } rounded-lg p-6 shadow-md`}
    >
      {/* Search */}
      <div className="mb-6">
        <label className="block text-sm font-semibold mb-2">Search</label>
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className={`w-full px-4 py-2 rounded border ${
            isDark
              ? 'bg-gray-700 border-gray-600 text-white'
              : 'bg-white border-gray-300'
          } focus:outline-none focus:ring-2 focus:ring-blue-600`}
        />
      </div>

      {/* Category Filter */}
      <div className="mb-6">
        <label className="block text-sm font-semibold mb-2">Category</label>
        <select
          value={selectedCategory}
          onChange={(e) => onCategoryChange(e.target.value)}
          className={`w-full px-4 py-2 rounded border ${
            isDark
              ? 'bg-gray-700 border-gray-600 text-white'
              : 'bg-white border-gray-300'
          } focus:outline-none focus:ring-2 focus:ring-blue-600`}
        >
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </option>
          ))}
        </select>
      </div>

      {/* Price Range */}
      <div className="mb-6">
        <label className="block text-sm font-semibold mb-2">
          Price Range: ${minPrice} - ${maxPrice}
        </label>
        <input
          type="range"
          min="0"
          max="1000"
          value={maxPrice}
          onChange={(e) => onPriceChange(minPrice, parseInt(e.target.value))}
          className="w-full"
        />
      </div>

      {/* Sort */}
      <div className="mb-6">
        <label className="block text-sm font-semibold mb-2">Sort By</label>
        <select
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
          className={`w-full px-4 py-2 rounded border ${
            isDark
              ? 'bg-gray-700 border-gray-600 text-white'
              : 'bg-white border-gray-300'
          } focus:outline-none focus:ring-2 focus:ring-blue-600`}
        >
          <option value="default">Default</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="rating">Rating: High to Low</option>
          <option value="name">Name: A to Z</option>
        </select>
      </div>
    </div>
  );
}
