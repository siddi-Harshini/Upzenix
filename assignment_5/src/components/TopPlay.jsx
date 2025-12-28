import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import { setActiveSong, playPause } from '../redux/slices/playerSlice';
import { FaPlay, FaPause } from 'react-icons/fa';

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
    }
  };

  return (
    <div className="w-80 bg-white dark:bg-secondary h-screen fixed right-0 top-0 overflow-y-auto border-l border-gray-200 dark:border-gray-700 hidden xl:block">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Top Charts
        </h2>

        {/* Top Charts List */}
        <div className="space-y-4 mb-8">
          {topCharts.map((song, index) => {
            const isCurrentSong = currentSong?.id === song.id;
            return (
              <div
                key={song.id}
                className={`flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer ${
                  isCurrentSong ? 'bg-gray-100 dark:bg-gray-700' : ''
                }`}
              >
                <span className="text-lg font-bold text-gray-500 dark:text-gray-400 w-6">
                  {index + 1}
                </span>
                <img
                  src={song.coverArt}
                  alt={song.title}
                  className="w-14 h-14 rounded-md object-cover"
                />
                <div className="flex-1 min-w-0">
                  <Link
                    to={`/songs/${song.id}`}
                    className="font-semibold text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary truncate block"
                  >
                    {song.title}
                  </Link>
                  <p className="text-sm text-gray-600 dark:text-gray-400 truncate">
                    {song.artist}
                  </p>
                </div>
                <button
                  onClick={() => handlePlayClick(song, index)}
                  className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary"
                >
                  {isCurrentSong && isPlaying ? (
                    <FaPause className="text-xl" />
                  ) : (
                    <FaPlay className="text-xl" />
                  )}
                </button>
              </div>
            );
          })}
        </div>

        {/* Trending Section */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
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
            {topCharts.slice(0, 5).map((song) => (
              <SwiperSlide
                key={song.id}
                style={{ width: '150px' }}
                className="shadow-lg rounded-lg animate-slideright"
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
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default TopPlay;
