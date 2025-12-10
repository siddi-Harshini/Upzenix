// src/components/shared/FormField/FormField.js
import React from 'react';
import './FormField.css';

/**
 * Reusable FormField Component
 * Single Responsibility - handles only a single form field rendering
 * Reduces code duplication across the form
 */
const FormField = ({
  label,
  name,
  type = 'text',
  value,
  error,
  onChange,
  onBlur,
  placeholder,
  maxLength,
  required = false,
  disabled = false,
  autoComplete,
  pattern,
}) => {
  const hasError = Boolean(error);

  return (
    <div className="form-group">
      <label htmlFor={name} className="form-label">
        {label}
        {required && <span className="required-indicator">*</span>}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        maxLength={maxLength}
        disabled={disabled}
        autoComplete={autoComplete}
        pattern={pattern}
        className={`form-input ${hasError ? 'form-input--error' : ''}`}
        aria-invalid={hasError}
        aria-describedby={hasError ? `${name}-error` : undefined}
      />
      {hasError && (
        <span id={`${name}-error`} className="error-message">
          {error}
        </span>
      )}
    </div>
  );
};

export default FormField;