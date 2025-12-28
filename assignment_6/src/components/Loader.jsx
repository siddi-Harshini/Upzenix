import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {[...Array(8)].map((_, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05 }}
          className="bg-white dark:bg-lightDark rounded-lg p-4"
        >
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="bg-gray-300 dark:bg-gray-600 h-48 rounded-md mb-3"
          />
          <div className="space-y-2">
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
              className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-3/4"
            />
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
              className="h-3 bg-gray-300 dark:bg-gray-600 rounded w-1/2"
            />
            <div className="flex justify-between">
              <motion.div
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
                className="h-3 bg-gray-300 dark:bg-gray-600 rounded w-1/4"
              />
              <motion.div
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.8 }}
                className="h-3 bg-gray-300 dark:bg-gray-600 rounded w-1/6"
              />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Loader;
