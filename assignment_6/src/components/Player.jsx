import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import {
  playPause,
  nextSong,
  prevSong,
  setVolume,
  setCurrentTime,
  setDuration,
  toggleShuffle,
  toggleRepeat,
  restorePlaybackPosition,
} from '../redux/slices/playerSlice';
import { addRecentSong, updateLastPlayed } from '../redux/slices/preferencesSlice';
import {
  FaPlay,
  FaPause,
  FaStepBackward,
  FaStepForward,
  FaVolumeUp,
  FaVolumeMute,
  FaRandom,
  FaRedoAlt,
} from 'react-icons/fa';

const Player = () => {
  const dispatch = useDispatch();
  const audioRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);

  const {
    currentSong,
    isPlaying,
    isActive,
    volume,
    currentTime,
    duration,
    isShuffle,
    isRepeat,
  } = useSelector((state) => state.player);

  // Play/pause effect
  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  // Song change effect
  useEffect(() => {
    if (audioRef.current && currentSong) {
      audioRef.current.src = currentSong.audioUrl;
      audioRef.current.load();
      
      // Restore playback position
      dispatch(restorePlaybackPosition(currentSong.id));
      
      if (isPlaying) {
        audioRef.current.play();
      }

      // Update recent songs
      dispatch(addRecentSong(currentSong));
      dispatch(updateLastPlayed(currentSong));
    }
  }, [currentSong]);

  // Volume effect
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      dispatch(setDuration(audioRef.current.duration));
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      dispatch(setCurrentTime(audioRef.current.currentTime));
    }
  };

  const handleEnded = () => {
    if (isRepeat) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    } else {
      dispatch(nextSong());
    }
  };

  const handleSeek = (e) => {
    const seekTime = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = seekTime;
      dispatch(setCurrentTime(seekTime));
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    dispatch(setVolume(newVolume));
    if (newVolume > 0) setIsMuted(false);
  };

  const formatTime = (time) => {
    if (isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  if (!isActive || !currentSong) return null;

  const progressPercentage = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        exit={{ y: 100 }}
        transition={{ type: 'spring', stiffness: 100 }}
        className="fixed bottom-0 left-0 right-0 bg-white dark:bg-lightDark border-t border-gray-200 dark:border-gray-700 px-4 py-3 z-50 shadow-2xl"
      >
        <audio
          ref={audioRef}
          onLoadedMetadata={handleLoadedMetadata}
          onTimeUpdate={handleTimeUpdate}
          onEnded={handleEnded}
        />

        <div className="max-w-screen-2xl mx-auto">
          <div className="flex items-center justify-between">
            {/* Song Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-4 w-1/4"
            >
              <motion.img
                src={currentSong.coverArt}
                alt={currentSong.title}
                className="w-14 h-14 rounded-md object-cover"
                animate={{ rotate: isPlaying ? 360 : 0 }}
                transition={{ duration: 10, repeat: isPlaying ? Infinity : 0, ease: 'linear' }}
              />
              <div className="min-w-0">
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white truncate">
                  {currentSong.title}
                </h4>
                <p className="text-xs text-gray-600 dark:text-gray-400 truncate">
                  {currentSong.artist}
                </p>
              </div>
            </motion.div>

            {/* Player Controls */}
            <div className="flex flex-col items-center w-2/4 max-w-2xl">
              <div className="flex items-center space-x-6 mb-2">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => dispatch(toggleShuffle())}
                  className={`${
                    isShuffle ? 'text-primary' : 'text-gray-600 dark:text-gray-400'
                  } hover:text-primary transition-colors`}
                >
                  <FaRandom className="text-lg" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => dispatch(prevSong())}
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  <FaStepBackward className="text-2xl" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => dispatch(playPause(!isPlaying))}
                  className="bg-primary hover:bg-green-600 text-white rounded-full p-3 shadow-lg"
                >
                  {isPlaying ? (
                    <FaPause className="text-xl" />
                  ) : (
                    <FaPlay className="text-xl ml-1" />
                  )}
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => dispatch(nextSong())}
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  <FaStepForward className="text-2xl" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => dispatch(toggleRepeat())}
                  className={`${
                    isRepeat ? 'text-primary' : 'text-gray-600 dark:text-gray-400'
                  } hover:text-primary transition-colors`}
                >
                  <FaRedoAlt className="text-lg" />
                </motion.button>
              </div>

              {/* Progress Bar */}
              <div className="flex items-center space-x-2 w-full">
                <span className="text-xs text-gray-600 dark:text-gray-400 w-10 text-right">
                  {formatTime(currentTime)}
                </span>
                <div className="flex-1 relative h-1 bg-gray-300 dark:bg-gray-600 rounded-lg overflow-hidden">
                  <motion.div
                    className="absolute top-0 left-0 h-full bg-primary"
                    initial={{ width: 0 }}
                    animate={{ width: `${progressPercentage}%` }}
                    transition={{ duration: 0.1 }}
                  />
                  <input
                    type="range"
                    min="0"
                    max={duration || 0}
                    value={currentTime}
                    onChange={handleSeek}
                    className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer z-10"
                  />
                </div>
                <span className="text-xs text-gray-600 dark:text-gray-400 w-10">
                  {formatTime(duration)}
                </span>
              </div>
            </div>

            {/* Volume Control */}
            <div className="flex items-center justify-end space-x-3 w-1/4">
              <div
                className="relative"
                onMouseEnter={() => setShowVolumeSlider(true)}
                onMouseLeave={() => setShowVolumeSlider(false)}
              >
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  onClick={() => setIsMuted(!isMuted)}
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  {isMuted || volume === 0 ? (
                    <FaVolumeMute className="text-xl" />
                  ) : (
                    <FaVolumeUp className="text-xl" />
                  )}
                </motion.button>
                <AnimatePresence>
                  {showVolumeSlider && (
                    <motion.div
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: 100 }}
                      exit={{ opacity: 0, width: 0 }}
                      className="absolute right-0 bottom-full mb-2"
                    >
                      <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.01"
                        value={isMuted ? 0 : volume}
                        onChange={handleVolumeChange}
                        className="w-24 h-1 bg-gray-300 dark:bg-gray-600 rounded-lg appearance-none cursor-pointer range-slider"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Player;
