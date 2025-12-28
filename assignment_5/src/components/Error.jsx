import React from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';

const Error = ({ message = 'Something went wrong. Please try again.' }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] text-center px-4">
      <FaExclamationTriangle className="text-6xl text-red-500 mb-4" />
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
        Oops! An Error Occurred
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md">
        {message}
      </p>
      <button
        onClick={() => window.location.reload()}
        className="bg-primary hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
      >
        Retry
      </button>
    </div>
  );
};

export default Error;
