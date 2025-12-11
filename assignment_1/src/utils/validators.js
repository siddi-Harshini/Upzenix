// src/utils/validators.js
/**
 * Validation utility functions
 * Follows DRY principle - centralized validation logic
 */

const VALIDATION_RULES = {
  firstName: {
    required: true,
    minLength: 2,
    pattern: /^[a-zA-Z\s]*$/,
    messages: {
      required: 'First Name is required',
      minLength: 'First Name must be at least 2 characters',
      pattern: 'First Name can only contain letters and spaces',
    },
  },
  lastName: {
    required: true,
    minLength: 2,
    pattern: /^[a-zA-Z\s]*$/,
    messages: {
      required: 'Last Name is required',
      minLength: 'Last Name must be at least 2 characters',
      pattern: 'Last Name can only contain letters and spaces',
    },
  },
  username: {
    required: true,
    minLength: 3,
    maxLength: 20,
    pattern: /^[a-zA-Z0-9_-]*$/,
    messages: {
      required: 'Username is required',
      minLength: 'Username must be at least 3 characters',
      maxLength: 'Username cannot exceed 20 characters',
      pattern: 'Username can only contain letters, numbers, hyphens, and underscores',
    },
  },
  email: {
    required: true,
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    messages: {
      required: 'Email is required',
      pattern: 'Please enter a valid email address',
    },
  },
  password: {
    required: true,
    minLength: 6,
    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{6,}$/,
    messages: {
      required: 'Password is required',
      minLength: 'Password must be at least 6 characters',
      pattern: 'Password must contain uppercase, lowercase, and numbers',
    },
  },
  phoneNumber: {
    required: true,
    pattern: /^[0-9]{10}$/,
    messages: {
      required: 'Phone Number is required',
      pattern: 'Phone Number must be exactly 10 digits',
    },
  },
  country: {
    required: true,
    minLength: 2,
    messages: {
      required: 'Country is required',
      minLength: 'Country must be at least 2 characters',
    },
  },
  city: {
    required: true,
    minLength: 2,
    messages: {
      required: 'City is required',
      minLength: 'City must be at least 2 characters',
    },
  },
  pan: {
    required: true,
    pattern: /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/,
    messages: {
      required: 'PAN is required',
      pattern: 'PAN format: AAAAA9999A (5 uppercase letters, 4 digits, 1 uppercase letter)',
    },
  },
  aadhaar: {
    required: true,
    pattern: /^[0-9]{12}$/,
    messages: {
      required: 'Aadhaar is required',
      pattern: 'Aadhaar must be exactly 12 digits',
    },
  },
};

/**
 * Validates a single form field
 * @param {string} fieldName - Name of the field to validate
 * @param {string} value - Value to validate
 * @param {object} formData - Complete form data for cross-field validation if needed
 * @returns {string} Error message or empty string if valid
 */
export const validateFormField = (fieldName, value, formData = {}) => {
  const rules = VALIDATION_RULES[fieldName];

  if (!rules) return ''; // No rules defined for this field

  const trimmedValue = value?.trim() || '';

  // Check required
  if (rules.required && !trimmedValue) {
    return rules.messages.required;
  }

  if (!trimmedValue) return ''; // Only validate other rules if value exists

  // Check minimum length
  if (rules.minLength && trimmedValue.length < rules.minLength) {
    return rules.messages.minLength;
  }

  // Check maximum length
  if (rules.maxLength && trimmedValue.length > rules.maxLength) {
    return rules.messages.maxLength;
  }

  // Check pattern
  if (rules.pattern && !rules.pattern.test(trimmedValue)) {
    return rules.messages.pattern;
  }

  return '';
};

/**
 * Validates entire form
 * @param {object} formData - Form data object
 * @returns {object} Object with field names as keys and error messages as values
 */
export const validateEntireForm = (formData) => {
  const newErrors = {};

  Object.keys(VALIDATION_RULES).forEach((fieldName) => {
    const error = validateFormField(fieldName, formData[fieldName], formData);
    if (error) {
      newErrors[fieldName] = error;
    }
  });

  return newErrors;
};

/**
 * Checks if form is valid without detailed error messages
 * @param {object} formData - Form data object
 * @returns {boolean} True if form is valid
 */
export const isFormDataValid = (formData) => {
  return Object.keys(validateEntireForm(formData)).length === 0;
};