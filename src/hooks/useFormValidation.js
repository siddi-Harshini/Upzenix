// src/hooks/useFormValidation.js
import { useState, useCallback, useMemo } from 'react';
import { validateFormField, validateEntireForm } from '../utils/validators';

/**
 * Custom hook for managing form state and validation
 * Follows Single Responsibility Principle - handles only form logic
 */
const useFormValidation = (initialState, onSubmit) => {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  // Memoized validation results for performance
  const validationErrors = useMemo(() => {
    return validateEntireForm(formData);
  }, [formData]);

  const isFormValid = useMemo(() => {
    return Object.keys(validationErrors).length === 0;
  }, [validationErrors]);

  const handleInputChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));

      // Clear error when user corrects the field
      if (errors[name]) {
        setErrors((prev) => ({
          ...prev,
          [name]: '',
        }));
      }
    },
    [errors]
  );

  const handleBlur = useCallback((e) => {
    const { name } = e.target;
    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));

    // Validate individual field
    const fieldError = validateFormField(name, formData[name], formData);
    setErrors((prev) => ({
      ...prev,
      [name]: fieldError,
    }));
  }, [formData]);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      // Validate entire form
      const newErrors = validateEntireForm(formData);
      setErrors(newErrors);

      if (Object.keys(newErrors).length === 0) {
        onSubmit(formData);
      }
    },
    [formData, onSubmit]
  );

  const resetForm = useCallback(() => {
    setFormData(initialState);
    setErrors({});
    setTouched({});
  }, [initialState]);

  return {
    formData,
    setFormData,
    errors,
    setErrors,
    touched,
    handleInputChange,
    handleBlur,
    handleSubmit,
    isFormValid,
    resetForm,
  };
};

export default useFormValidation;