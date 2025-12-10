// src/components/FormSummary/FormSummary.js
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import SummaryCard from '../shared/SummaryCard/SummaryCard';
import { FORM_FIELD_LABELS } from '../../constants/formConstants';
import './FormSummary.css';

/**
 * FormSummary Component
 * Displays submitted form data in a clean, organized layout
 * Follows Presentation Logic Separation
 */
const FormSummary = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const formData = location.state?.formData;

  if (!formData) {
    return (
      <div className="summary-container">
        <div className="no-data-state">
          <h2>No form data found</h2>
          <p>Please complete the registration form first.</p>
          <button
            className="back-button"
            onClick={() => navigate('/')}
          >
            Go Back to Form
          </button>
        </div>
      </div>
    );
  }

  const handleCopyToClipboard = () => {
    const dataString = JSON.stringify(formData, null, 2);
    navigator.clipboard.writeText(dataString).then(() => {
      alert('Form data copied to clipboard!');
    });
  };

  return (
    <div className="summary-container">
      <div className="summary-wrapper">
        <div className="summary-header">
          <h1>Registration Successful!</h1>
          <p className="summary-subtitle">Here's your submitted information</p>
        </div>

        <div className="summary-grid">
          {Object.entries(formData).map(([key, value]) => (
            <SummaryCard
              key={key}
              label={FORM_FIELD_LABELS[key] || key}
              value={
                key === 'phoneNumber'
                  ? `${formData.countryCode} ${value}`
                  : value
              }
            />
          ))}
        </div>

        <div className="summary-actions">
          <button
            className="back-button"
            onClick={() => navigate('/')}
          >
            Back to Form
          </button>
          <button
            className="copy-button"
            onClick={handleCopyToClipboard}
          >
            Copy Data
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormSummary;