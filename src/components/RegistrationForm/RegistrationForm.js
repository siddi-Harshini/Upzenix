// src/components/RegistrationForm/RegistrationForm.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import useFormValidation from '../../hooks/useFormValidation';
import { INITIAL_FORM_STATE } from '../../constants/formConstants';
import FormFields from './FormFields';
import './RegistrationForm.css';

/**
 * RegistrationForm Component
 * Responsible for rendering the registration form UI
 * Follows Separation of Concerns - delegates logic to custom hooks
 */
const RegistrationForm = () => {
  const navigate = useNavigate();

  const {
    formData,
    errors,
    touched,
    handleInputChange,
    handleBlur,
    handleSubmit,
    isFormValid,
  } = useFormValidation(INITIAL_FORM_STATE, (data) => {
    navigate('/summary', { state: { formData: data } });
  });

  return (
    <div className="form-container">
      <div className="form-wrapper">
        <div className="form-header">
          <h1>Registration Form</h1>
          <p className="form-subtitle">Join our community today</p>
        </div>

        <form onSubmit={handleSubmit} className="registration-form">
          <FormFields
            formData={formData}
            errors={errors}
            touched={touched}
            handleInputChange={handleInputChange}
            handleBlur={handleBlur}
          />

          <button
            type="submit"
            className="submit-btn"
            disabled={!isFormValid}
            aria-label="Register"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;