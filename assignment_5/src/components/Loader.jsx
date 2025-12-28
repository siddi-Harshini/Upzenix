import React from 'react';

const Loader = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {[...Array(8)].map((_, index) => (
        <div
          key={index}
          className="bg-white dark:bg-lightDark rounded-lg p-4 animate-pulse"
        >
          <div className="bg-gray-300 dark:bg-gray-600 h-48 rounded-md mb-3"></div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-3/4"></div>
            <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded w-1/2"></div>
            <div className="flex justify-between">
              <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded w-1/4"></div>
              <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded w-1/6"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Loader;
