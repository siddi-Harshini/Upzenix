// src/components/RegistrationForm/FormFields.js
import React from 'react';
import FormField from '../shared/FormField/FormField';
import PasswordField from '../shared/PasswordField/PasswordField';
import CountryCodeSelect from '../shared/CountryCodeSelect/CountryCodeSelect';
import { COUNTRY_CODES } from '../../constants/formConstants';

/**
 * FormFields Component
 * Renders all form fields with a clean, reusable structure
 * Follows DRY principle - reuses FormField component
 */
const FormFields = ({
  formData,
  errors,
  touched,
  handleInputChange,
  handleBlur,
}) => {
  return (
    <>
      {/* Personal Information Section */}
      <fieldset className="form-section">
        <legend>Personal Information</legend>
        <div className="form-row">
          <FormField
            label="First Name"
            name="firstName"
            type="text"
            value={formData.firstName}
            error={touched.firstName ? errors.firstName : ''}
            onChange={handleInputChange}
            onBlur={handleBlur}
            placeholder="John"
            required
          />

          <FormField
            label="Last Name"
            name="lastName"
            type="text"
            value={formData.lastName}
            error={touched.lastName ? errors.lastName : ''}
            onChange={handleInputChange}
            onBlur={handleBlur}
            placeholder="Doe"
            required
          />
        </div>
      </fieldset>

      {/* Account Information Section */}
      <fieldset className="form-section">
        <legend>Account Information</legend>
        <div className="form-row">
          <FormField
            label="Username"
            name="username"
            type="text"
            value={formData.username}
            error={touched.username ? errors.username : ''}
            onChange={handleInputChange}
            onBlur={handleBlur}
            placeholder="john_doe123"
            required
          />

          <FormField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            error={touched.email ? errors.email : ''}
            onChange={handleInputChange}
            onBlur={handleBlur}
            placeholder="john@example.com"
            required
          />
        </div>

        <div className="form-row full">
          <PasswordField
            value={formData.password}
            error={touched.password ? errors.password : ''}
            onChange={handleInputChange}
            onBlur={handleBlur}
            required
          />
        </div>
      </fieldset>

      {/* Contact Information Section */}
      <fieldset className="form-section">
        <legend>Contact Information</legend>
        <div className="form-row">
          <CountryCodeSelect
            value={formData.countryCode}
            onChange={handleInputChange}
            options={COUNTRY_CODES}
            required
          />

          <FormField
            label="Phone Number"
            name="phoneNumber"
            type="text"
            value={formData.phoneNumber}
            error={touched.phoneNumber ? errors.phoneNumber : ''}
            onChange={handleInputChange}
            onBlur={handleBlur}
            placeholder="9876543210"
            maxLength="10"
            required
          />
        </div>
      </fieldset>

      {/* Location Information Section */}
      <fieldset className="form-section">
        <legend>Location Information</legend>
        <div className="form-row">
          <FormField
            label="Country"
            name="country"
            type="text"
            value={formData.country}
            error={touched.country ? errors.country : ''}
            onChange={handleInputChange}
            onBlur={handleBlur}
            placeholder="India"
            required
          />

          <FormField
            label="City"
            name="city"
            type="text"
            value={formData.city}
            error={touched.city ? errors.city : ''}
            onChange={handleInputChange}
            onBlur={handleBlur}
            placeholder="New Delhi"
            required
          />
        </div>
      </fieldset>

      {/* Government ID Section */}
      <fieldset className="form-section">
        <legend>Government Identification</legend>
        <div className="form-row">
          <FormField
            label="PAN"
            name="pan"
            type="text"
            value={formData.pan.toUpperCase()}
            error={touched.pan ? errors.pan : ''}
            onChange={handleInputChange}
            onBlur={handleBlur}
            placeholder="AAAAA9999A"
            maxLength="10"
            required
          />

          <FormField
            label="Aadhaar"
            name="aadhaar"
            type="text"
            value={formData.aadhaar}
            error={touched.aadhaar ? errors.aadhaar : ''}
            onChange={handleInputChange}
            onBlur={handleBlur}
            placeholder="123456789012"
            maxLength="12"
            required
          />
        </div>
      </fieldset>
    </>
  );
};

export default FormFields;