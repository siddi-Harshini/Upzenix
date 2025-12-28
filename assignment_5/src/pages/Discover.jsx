import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Discover {selectedGenre !== 'All' && selectedGenre}
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          {selectedGenre === 'All'
            ? 'Explore all music genres'
            : `Explore ${selectedGenre} music`}
        </p>
      </div>

      {isLoading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
        </div>
      )}

      {!isLoading && songs.length === 0 && (
        <div className="text-center py-20">
          <p className="text-xl text-gray-600 dark:text-gray-400">
            No songs found in this genre.
          </p>
        </div>
      )}
    </div>
  );
};

export default Discover;
