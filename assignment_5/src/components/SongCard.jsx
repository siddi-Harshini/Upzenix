import React from 'react';
import { useDispatch } from 'react-redux';
import { setActiveSong, playPause } from '../redux/slices/playerSlice';
import { FaPlay, FaPause } from 'react-icons/fa';

const SongCard = ({ song, index, playlist, isPlaying, activeSong }) => {
  const dispatch = useDispatch();

  const handlePlayClick = () => {
    if (activeSong?.id === song.id) {
      dispatch(playPause(!isPlaying));
    } else {
      dispatch(setActiveSong({ song, index, playlist }));
      dispatch(playPause(true));
    }
  };

  const formatDuration = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const isCurrentSong = activeSong?.id === song.id;

  return (
    <div className="group relative bg-white dark:bg-lightDark rounded-lg p-4 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 cursor-pointer shadow-md hover:shadow-xl">
      <div className="relative overflow-hidden rounded-md mb-3">
        <img
          src={song.coverArt}
          alt={song.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div
          className={`absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300 ${
            isCurrentSong ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
          }`}
        >
          <button
            onClick={handlePlayClick}
            className="bg-primary hover:bg-green-600 text-white rounded-full p-4 transform transition-transform hover:scale-110"
          >
            {isCurrentSong && isPlaying ? (
              <FaPause className="text-2xl" />
            ) : (
              <FaPlay className="text-2xl ml-1" />
            )}
          </button>
        </div>
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
        <div className="absolute top-2 right-2 bg-primary text-white text-xs px-2 py-1 rounded-full">
          Now Playing
        </div>
      )}
    </div>
  );
};

export default SongCard;
