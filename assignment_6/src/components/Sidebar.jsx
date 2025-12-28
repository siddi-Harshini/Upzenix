import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { setGenre } from '../redux/slices/songsSlice';
import { setPreferredGenre } from '../redux/slices/preferencesSlice';
import { FaHome, FaMusic, FaHistory, FaClock } from 'react-icons/fa';

const Sidebar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { genres, selectedGenre } = useSelector((state) => state.songs);
  const { preferredGenre } = useSelector((state) => state.preferences);

  // Initialize with preferred genre on mount
  useEffect(() => {
    if (preferredGenre && preferredGenre !== selectedGenre) {
      dispatch(setGenre(preferredGenre));
    }
  }, []);

  const navLinks = [
    { name: 'Discover', path: '/', icon: FaHome },
    { name: 'Recently Played', path: '/recent', icon: FaClock },
    { name: 'Top Charts', path: '/charts', icon: FaMusic },
    { name: 'History', path: '/history', icon: FaHistory },
  ];

  const handleGenreClick = (genre) => {
    dispatch(setGenre(genre));
    // Save as preferred genre
    dispatch(setPreferredGenre(genre));
  };

  return (
    <motion.div
      initial={{ x: -300 }}
      animate={{ x: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
      className="w-64 bg-white dark:bg-secondary h-screen fixed left-0 top-0 overflow-y-auto border-r border-gray-200 dark:border-gray-700 z-40"
    >
      <div className="p-6">
        <Link to="/" className="flex items-center space-x-2 mb-8">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <FaMusic className="text-primary text-3xl" />
          </motion.div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Spotify
          </h1>
        </Link>

        {/* Navigation Links */}
        <nav className="space-y-2 mb-8">
          {navLinks.map((link, index) => {
            const Icon = link.icon;
            const isActive = location.pathname === link.path;
            return (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={link.path}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'bg-primary text-white shadow-lg'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  <Icon className="text-xl" />
                  <span className="font-medium">{link.name}</span>
                </Link>
              </motion.div>
            );
          })}
        </nav>

        {/* Genre Filter */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
          <h2 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
            Genres
          </h2>
          <div className="space-y-1">
            <motion.button
              whileHover={{ x: 5 }}
              onClick={() => handleGenreClick('All')}
              className={`w-full text-left px-4 py-2 rounded-lg transition-all duration-200 ${
                selectedGenre === 'All'
                  ? 'bg-primary text-white shadow-md'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              All Genres
              {preferredGenre === 'All' && (
                <span className="ml-2 text-xs">⭐</span>
              )}
            </motion.button>
            {genres.map((genre, index) => (
              <motion.button
                key={genre}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.05 }}
                whileHover={{ x: 5 }}
                onClick={() => handleGenreClick(genre)}
                className={`w-full text-left px-4 py-2 rounded-lg transition-all duration-200 ${
                  selectedGenre === genre
                    ? 'bg-primary text-white shadow-md'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                {genre}
                {preferredGenre === genre && (
                  <span className="ml-2 text-xs">⭐</span>
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Sidebar;
