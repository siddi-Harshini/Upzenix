import React from 'react';
import { useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { setActiveSong, playPause } from '../redux/slices/playerSlice';
import { addRecentSong, addToHistory, updateFavoriteGenres } from '../redux/slices/preferencesSlice';
import { FaPlay, FaPause } from 'react-icons/fa';

const SongCard = ({ song, index, playlist, isPlaying, activeSong }) => {
  const dispatch = useDispatch();

  const handlePlayClick = () => {
    if (activeSong?.id === song.id) {
      dispatch(playPause(!isPlaying));
    } else {
      dispatch(setActiveSong({ song, index, playlist }));
      dispatch(playPause(true));
      
      // Track in preferences
      dispatch(addRecentSong(song));
      dispatch(addToHistory(song));
      dispatch(updateFavoriteGenres(song.genre));
    }
  };

  const formatDuration = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const isCurrentSong = activeSong?.id === song.id;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ scale: 1.03 }}
      className="group relative bg-white dark:bg-lightDark rounded-lg p-4 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 cursor-pointer shadow-md hover:shadow-xl"
    >
      <div className="relative overflow-hidden rounded-md mb-3">
        <motion.img
          src={song.coverArt}
          alt={song.title}
          className="w-full h-48 object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isCurrentSong ? 1 : 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300"
        >
          <motion.button
            onClick={handlePlayClick}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary hover:bg-green-600 text-white rounded-full p-4"
          >
            {isCurrentSong && isPlaying ? (
              <FaPause className="text-2xl" />
            ) : (
              <FaPlay className="text-2xl ml-1" />
            )}
          </motion.button>
        </motion.div>
      </div>

      <div className="space-y-1">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white truncate">
          {song.title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 truncate">
          {song.artist}
        </p>
        <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-500">
          <span className="bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded">
            {song.genre}
          </span>
          <span>{formatDuration(song.duration)}</span>
        </div>
      </div>

      {isCurrentSong && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute top-2 right-2 bg-primary text-white text-xs px-2 py-1 rounded-full"
        >
          Now Playing
        </motion.div>
      )}
    </motion.div>
  );
};

export default SongCard;
