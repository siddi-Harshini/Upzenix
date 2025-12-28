import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import { toggleTheme } from '../redux/slices/themeSlice';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const { darkMode } = useSelector((state) => state.theme);

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <motion.button
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.1, rotate: 15 }}
      whileTap={{ scale: 0.9 }}
      onClick={handleToggle}
      className="fixed top-4 right-4 z-50 bg-white dark:bg-lightDark border border-gray-200 dark:border-gray-700 rounded-full p-3 shadow-lg hover:shadow-xl transition-all"
      aria-label="Toggle theme"
    >
      <AnimatePresence mode="wait">
        {darkMode ? (
          <motion.div
            key="sun"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <FaSun className="text-xl text-yellow-400" />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ rotate: 90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <FaMoon className="text-xl text-gray-700" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default ThemeToggle;
