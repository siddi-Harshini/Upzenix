import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaClock, FaHistory } from 'react-icons/fa';
import SongCard from '../components/SongCard';

const RecentlyPlayed = () => {
  const { recentSongs, lastPlayedSong } = useSelector((state) => state.preferences);
  const { currentSong, isPlaying } = useSelector((state) => state.player);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="p-8"
    >
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="mb-8"
      >
        <div className="flex items-center space-x-3 mb-2">
          <FaHistory className="text-3xl text-primary" />
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Recently Played
          </h1>
        </div>
        <p className="text-gray-600 dark:text-gray-400">
          Your listening history - {recentSongs.length} song{recentSongs.length !== 1 ? 's' : ''}
        </p>
      </motion.div>

      {lastPlayedSong && (
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="mb-8 bg-gradient-to-r from-primary/20 to-transparent dark:from-primary/10 rounded-lg p-6"
        >
          <div className="flex items-center space-x-3 mb-3">
            <FaClock className="text-primary" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Last Played
            </h2>
          </div>
          <div className="flex items-center space-x-4">
            <img
              src={lastPlayedSong.coverArt}
              alt={lastPlayedSong.title}
              className="w-20 h-20 rounded-lg object-cover"
            />
            <div>
              <Link
                to={`/songs/${lastPlayedSong.id}`}
                className="text-xl font-bold text-gray-900 dark:text-white hover:text-primary"
              >
                {lastPlayedSong.title}
              </Link>
              <p className="text-gray-600 dark:text-gray-400">
                {lastPlayedSong.artist}
              </p>
              <span className="inline-block mt-1 text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">
                {lastPlayedSong.genre}
              </span>
            </div>
          </div>
        </motion.div>
      )}

      {recentSongs.length > 0 ? (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.05
              }
            }
          }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {recentSongs.map((song, index) => (
            <SongCard
              key={`${song.id}-${index}`}
              song={song}
              index={index}
              playlist={recentSongs}
              isPlaying={isPlaying}
              activeSong={currentSong}
            />
          ))}
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-20"
        >
          <FaHistory className="text-6xl text-gray-300 dark:text-gray-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            No Recent Songs
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Start playing some music to see your history here
          </p>
          <Link
            to="/"
            className="inline-block bg-primary hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Discover Music
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
};

export default RecentlyPlayed;
