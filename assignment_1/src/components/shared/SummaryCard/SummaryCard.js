// src/components/shared/SummaryCard/SummaryCard.js
import React from 'react';
import './SummaryCard.css';

/**
 * SummaryCard Component
 * Reusable card for displaying summary information
 * Single Responsibility - renders only a single data item
 */
const SummaryCard = ({ label, value }) => {
  return (
    <div className="summary-card">
      <h3 className="summary-label">{label}</h3>
      <p className="summary-value">{value}</p>
    </div>
  );
};

export default SummaryCard;