// src/components/shared/CountryCodeSelect/CountryCodeSelect.js
import React from 'react';
import './CountryCodeSelect.css';

/**
 * CountryCodeSelect Component
 * Reusable select component for country codes
 * Follows Open/Closed Principle - open for extension through props
 */
const CountryCodeSelect = ({ value, onChange, options, required = false }) => {
  return (
    <div className="form-group">
      <label htmlFor="countryCode" className="form-label">
        Country Code
        {required && <span className="required-indicator">*</span>}
      </label>
      <select
        id="countryCode"
        name="countryCode"
        value={value}
        onChange={onChange}
        className="form-select"
      >
        <option value="">-- Select Country Code --</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CountryCodeSelect;