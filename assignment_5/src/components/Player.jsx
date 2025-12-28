import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  playPause,
  nextSong,
  prevSong,
  setVolume,
  setCurrentTime,
  setDuration,
} from '../redux/slices/playerSlice';
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
  const [isShuffle, setIsShuffle] = useState(false);
  const [isRepeat, setIsRepeat] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const {
    currentSong,
    isPlaying,
    isActive,
    volume,
    currentTime,
    duration,
  } = useSelector((state) => state.player);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  useEffect(() => {
    if (audioRef.current && currentSong) {
      audioRef.current.src = currentSong.audioUrl;
      audioRef.current.load();
      if (isPlaying) {
        audioRef.current.play();
      }
    }
  }, [currentSong]);

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
  };

  const formatTime = (time) => {
    if (isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  if (!isActive || !currentSong) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-lightDark border-t border-gray-200 dark:border-gray-700 px-4 py-3 z-50">
      <audio
        ref={audioRef}
        onLoadedMetadata={handleLoadedMetadata}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleEnded}
      />

      <div className="max-w-screen-2xl mx-auto">
        <div className="flex items-center justify-between">
          {/* Song Info */}
          <div className="flex items-center space-x-4 w-1/4">
            <img
              src={currentSong.coverArt}
              alt={currentSong.title}
              className="w-14 h-14 rounded-md object-cover"
            />
            <div className="min-w-0">
              <h4 className="text-sm font-semibold text-gray-900 dark:text-white truncate">
                {currentSong.title}
              </h4>
              <p className="text-xs text-gray-600 dark:text-gray-400 truncate">
                {currentSong.artist}
              </p>
            </div>
          </div>

          {/* Player Controls */}
          <div className="flex flex-col items-center w-2/4 max-w-2xl">
            <div className="flex items-center space-x-6 mb-2">
              <button
                onClick={() => setIsShuffle(!isShuffle)}
                className={`${
                  isShuffle ? 'text-primary' : 'text-gray-600 dark:text-gray-400'
                } hover:text-primary transition-colors`}
              >
                <FaRandom className="text-lg" />
              </button>

              <button
                onClick={() => dispatch(prevSong())}
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <FaStepBackward className="text-2xl" />
              </button>

              <button
                onClick={() => dispatch(playPause(!isPlaying))}
                className="bg-primary hover:bg-green-600 text-white rounded-full p-3 transition-transform hover:scale-110"
              >
                {isPlaying ? (
                  <FaPause className="text-xl" />
                ) : (
                  <FaPlay className="text-xl ml-1" />
                )}
              </button>

              <button
                onClick={() => dispatch(nextSong())}
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <FaStepForward className="text-2xl" />
              </button>

              <button
                onClick={() => setIsRepeat(!isRepeat)}
                className={`${
                  isRepeat ? 'text-primary' : 'text-gray-600 dark:text-gray-400'
                } hover:text-primary transition-colors`}
              >
                <FaRedoAlt className="text-lg" />
              </button>
            </div>

            {/* Progress Bar */}
            <div className="flex items-center space-x-2 w-full">
              <span className="text-xs text-gray-600 dark:text-gray-400 w-10 text-right">
                {formatTime(currentTime)}
              </span>
              <input
                type="range"
                min="0"
                max={duration || 0}
                value={currentTime}
                onChange={handleSeek}
                className="flex-1 h-1 bg-gray-300 dark:bg-gray-600 rounded-lg appearance-none cursor-pointer range-slider"
              />
              <span className="text-xs text-gray-600 dark:text-gray-400 w-10">
                {formatTime(duration)}
              </span>
            </div>
          </div>

          {/* Volume Control */}
          <div className="flex items-center justify-end space-x-3 w-1/4">
            <button
              onClick={() => setIsMuted(!isMuted)}
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              {isMuted || volume === 0 ? (
                <FaVolumeMute className="text-xl" />
              ) : (
                <FaVolumeUp className="text-xl" />
              )}
            </button>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={isMuted ? 0 : volume}
              onChange={handleVolumeChange}
              className="w-24 h-1 bg-gray-300 dark:bg-gray-600 rounded-lg appearance-none cursor-pointer range-slider"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
