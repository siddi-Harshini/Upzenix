import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../redux/slices/themeSlice';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const { darkMode } = useSelector((state) => state.theme);

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <button
      onClick={handleToggle}
      className="fixed top-4 right-4 z-50 bg-white dark:bg-lightDark border border-gray-200 dark:border-gray-700 rounded-full p-3 shadow-lg hover:shadow-xl transition-all hover:scale-110"
      aria-label="Toggle theme"
    >
      {darkMode ? (
        <FaSun className="text-xl text-yellow-400" />
      ) : (
        <FaMoon className="text-xl text-gray-700" />
      )}
    </button>
  );
};

export default ThemeToggle;
