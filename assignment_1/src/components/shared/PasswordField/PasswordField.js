// src/components/shared/PasswordField/PasswordField.js
import React from 'react';
import usePasswordToggle from '../../../hooks/usePasswordToggle';
import './PasswordField.css';

/**
 * PasswordField Component
 * Encapsulates password visibility toggle logic
 * Follows Composition over Inheritance pattern
 */
const PasswordField = ({
  value,
  error,
  onChange,
  onBlur,
  required = false,
}) => {
  const { isVisible, toggleVisibility, getInputType } = usePasswordToggle();
  const hasError = Boolean(error);

  return (
    <div className="form-group password-group">
      <label htmlFor="password" className="form-label">
        Password
        {required && <span className="required-indicator">*</span>}
      </label>
      <div className="password-wrapper">
        <input
          id="password"
          type={getInputType()}
          name="password"
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder="Enter password (min 6 chars)"
          className={`form-input ${hasError ? 'form-input--error' : ''}`}
          aria-invalid={hasError}
          aria-describedby={hasError ? 'password-error' : 'password-hint'}
          autoComplete="new-password"
        />
        <button
          type="button"
          className="toggle-password-btn"
          onClick={toggleVisibility}
          aria-label={isVisible ? 'Hide password' : 'Show password'}
          title={isVisible ? 'Hide password' : 'Show password'}
        >
          {isVisible ? '🙈' : '👁️'}
        </button>
      </div>
      {hasError && (
        <span id="password-error" className="error-message">
          {error}
        </span>
      )}
      {!hasError && (
        <span id="password-hint" className="password-hint">
          Must contain uppercase, lowercase, and numbers
        </span>
      )}
    </div>
  );
};

export default PasswordField;