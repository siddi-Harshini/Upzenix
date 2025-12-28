import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setGenre } from '../redux/slices/songsSlice';
import { FaHome, FaMusic, FaHeart, FaHistory, FaCog } from 'react-icons/fa';

const Sidebar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { genres, selectedGenre } = useSelector((state) => state.songs);

  const navLinks = [
    { name: 'Discover', path: '/', icon: FaHome },
    { name: 'My Library', path: '/library', icon: FaMusic },
    { name: 'Favorites', path: '/favorites', icon: FaHeart },
    { name: 'Recent', path: '/recent', icon: FaHistory },
    { name: 'Settings', path: '/settings', icon: FaCog },
  ];

  const handleGenreClick = (genre) => {
    dispatch(setGenre(genre));
  };

  return (
    <div className="w-64 bg-white dark:bg-secondary h-screen fixed left-0 top-0 overflow-y-auto border-r border-gray-200 dark:border-gray-700">
      <div className="p-6">
        <Link to="/" className="flex items-center space-x-2 mb-8">
          <FaMusic className="text-primary text-3xl" />
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Spotify
          </h1>
        </Link>

        {/* Navigation Links */}
        <nav className="space-y-2 mb-8">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-primary text-white'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                <Icon className="text-xl" />
                <span className="font-medium">{link.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Genre Filter */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
          <h2 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
            Genres
          </h2>
          <div className="space-y-1">
            <button
              onClick={() => handleGenreClick('All')}
              className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                selectedGenre === 'All'
                  ? 'bg-primary text-white'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              All Genres
            </button>
            {genres.map((genre) => (
              <button
                key={genre}
                onClick={() => handleGenreClick(genre)}
                className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                  selectedGenre === genre
                    ? 'bg-primary text-white'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                {genre}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
