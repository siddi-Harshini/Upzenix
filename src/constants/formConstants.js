// src/constants/formConstants.js
/**
 * Centralized constants for form configuration
 */

export const INITIAL_FORM_STATE = {
  firstName: '',
  lastName: '',
  username: '',
  email: '',
  password: '',
  countryCode: '+91',
  phoneNumber: '',
  country: '',
  city: '',
  pan: '',
  aadhaar: '',
};

export const COUNTRY_CODES = [
  { value: '+1', label: '+1 (USA)' },
  { value: '+44', label: '+44 (UK)' },
  { value: '+91', label: '+91 (India)' },
  { value: '+86', label: '+86 (China)' },
  { value: '+81', label: '+81 (Japan)' },
  { value: '+33', label: '+33 (France)' },
  { value: '+49', label: '+49 (Germany)' },
  { value: '+39', label: '+39 (Italy)' },
];

export const FORM_FIELD_LABELS = {
  firstName: 'First Name',
  lastName: 'Last Name',
  username: 'Username',
  email: 'Email',
  password: 'Password',
  countryCode: 'Country Code',
  phoneNumber: 'Phone Number',
  country: 'Country',
  city: 'City',
  pan: 'PAN',
  aadhaar: 'Aadhaar',
};