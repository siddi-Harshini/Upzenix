// src/hooks/usePasswordToggle.js
import { useState, useCallback } from 'react';

/**
 * Custom hook for password visibility toggle
 * Separates password UI logic from main form logic (SRP)
 */
const usePasswordToggle = (initialState = false) => {
  const [isVisible, setIsVisible] = useState(initialState);

  const toggleVisibility = useCallback(() => {
    setIsVisible((prev) => !prev);
  }, []);

  const getInputType = useCallback(() => {
    return isVisible ? 'text' : 'password';
  }, [isVisible]);

  return {
    isVisible,
    toggleVisibility,
    getInputType,
  };
};

export default usePasswordToggle;