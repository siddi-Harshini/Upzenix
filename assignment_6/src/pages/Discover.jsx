import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { getSongs, getSongsByGenre } from '../redux/slices/songsSlice';
import SongCard from '../components/SongCard';
import Loader from '../components/Loader';
import Error from '../components/Error';

const Discover = () => {
  const dispatch = useDispatch();
  const { songs, selectedGenre, isLoading, error } = useSelector(
    (state) => state.songs
  );
  const { currentSong, isPlaying } = useSelector((state) => state.player);
  const { preferredGenre } = useSelector((state) => state.preferences);

  useEffect(() => {
    if (selectedGenre === 'All') {
      dispatch(getSongs());
    } else {
      dispatch(getSongsByGenre(selectedGenre));
    }
  }, [dispatch, selectedGenre]);

  if (error) {
    return <Error message={error} />;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="p-8"
    >
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Discover {selectedGenre !== 'All' && selectedGenre}
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          {selectedGenre === 'All'
            ? 'Explore all music genres'
            : `Explore ${selectedGenre} music`}
          {preferredGenre && preferredGenre !== 'All' && (
            <span className="ml-2 text-sm text-primary">
              (Your favorite: {preferredGenre})
            </span>
          )}
        </p>
      </motion.div>

      {isLoading ? (
        <Loader />
      ) : (
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
          {songs.map((song, index) => (
            <SongCard
              key={song.id}
              song={song}
              index={index}
              playlist={songs}
              isPlaying={isPlaying}
              activeSong={currentSong}
            />
          ))}
        </motion.div>
      )}

      {!isLoading && songs.length === 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-20"
        >
          <p className="text-xl text-gray-600 dark:text-gray-400">
            No songs found in this genre.
          </p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Discover;
