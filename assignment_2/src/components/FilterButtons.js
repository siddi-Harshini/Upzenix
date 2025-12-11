import React from 'react';
import './FilterButtons.css';

function FilterButtons({ currentFilter, onFilterChange }) {
  const filters = [
    { value: 'all', label: 'All Tasks' },
    { value: 'active', label: 'Active' },
    { value: 'completed', label: 'Completed' },
  ];

  return (
    <div className="filter-buttons">
      <p className="filter-label">Filter:</p>
      <div className="button-group">
        {filters.map((filter) => (
          <button
            key={filter.value}
            onClick={() => onFilterChange(filter.value)}
            className={`filter-btn ${currentFilter === filter.value ? 'active' : ''}`}
            aria-pressed={currentFilter === filter.value}
          >
            {filter.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default FilterButtons;
