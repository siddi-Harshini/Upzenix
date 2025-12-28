import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import { setActiveSong, playPause } from '../redux/slices/playerSlice';
import { addRecentSong } from '../redux/slices/preferencesSlice';
import { FaPlay, FaPause, FaFire } from 'react-icons/fa';

import 'swiper/css';
import 'swiper/css/free-mode';

const TopPlay = () => {
  const dispatch = useDispatch();
  const { topCharts } = useSelector((state) => state.songs);
  const { currentSong, isPlaying } = useSelector((state) => state.player);

  const handlePlayClick = (song, index) => {
    if (currentSong?.id === song.id) {
      dispatch(playPause(!isPlaying));
    } else {
      dispatch(setActiveSong({ song, index, playlist: topCharts }));
      dispatch(playPause(true));
      dispatch(addRecentSong(song));
    }
  };

  return (
    <motion.div
      initial={{ x: 300 }}
      animate={{ x: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
      className="w-80 bg-white dark:bg-secondary h-screen fixed right-0 top-0 overflow-y-auto border-l border-gray-200 dark:border-gray-700 hidden xl:block z-40"
    >
      <div className="p-6">
        <div className="flex items-center space-x-2 mb-6">
          <FaFire className="text-orange-500 text-2xl" />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Top Charts
          </h2>
        </div>

        {/* Top Charts List */}
        <div className="space-y-4 mb-8">
          <AnimatePresence>
            {topCharts.map((song, index) => {
              const isCurrentSong = currentSong?.id === song.id;
              return (
                <motion.div
                  key={song.id}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className={`flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 cursor-pointer ${
                    isCurrentSong ? 'bg-gray-100 dark:bg-gray-700 ring-2 ring-primary' : ''
                  }`}
                >
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className={`text-lg font-bold w-6 ${
                      index < 3
                        ? 'text-primary'
                        : 'text-gray-500 dark:text-gray-400'
                    }`}
                  >
                    {index + 1}
                  </motion.span>
                  <img
                    src={song.coverArt}
                    alt={song.title}
                    className="w-14 h-14 rounded-md object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <Link
                      to={`/songs/${song.id}`}
                      className="font-semibold text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary truncate block transition-colors"
                    >
                      {song.title}
                    </Link>
                    <p className="text-sm text-gray-600 dark:text-gray-400 truncate">
                      {song.artist}
                    </p>
                  </div>
                  <motion.button
                    onClick={() => handlePlayClick(song, index)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                  >
                    {isCurrentSong && isPlaying ? (
                      <FaPause className="text-xl" />
                    ) : (
                      <FaPlay className="text-xl" />
                    )}
                  </motion.button>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Trending Section */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
            <motion.span
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="mr-2"
            >
              🔥
            </motion.span>
            Trending Now
          </h3>
          <Swiper
            slidesPerView="auto"
            spaceBetween={15}
            freeMode
            centeredSlides
            centeredSlidesBounds
            modules={[FreeMode]}
            className="mt-4"
          >
            {topCharts.slice(0, 5).map((song, index) => (
              <SwiperSlide
                key={song.id}
                style={{ width: '150px' }}
                className="shadow-lg rounded-lg"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Link to={`/songs/${song.id}`}>
                    <img
                      src={song.coverArt}
                      alt={song.title}
                      className="rounded-lg w-full h-32 object-cover"
                    />
                    <p className="mt-2 text-sm font-semibold text-gray-900 dark:text-white truncate">
                      {song.title}
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400 truncate">
                      {song.artist}
                    </p>
                  </Link>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </motion.div>
  );
};

export default TopPlay;
