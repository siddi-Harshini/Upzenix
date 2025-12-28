import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSongById, fetchRelatedSongs } from '../services/api';
import { setActiveSong, playPause } from '../redux/slices/playerSlice';
import { FaPlay, FaPause, FaArrowLeft, FaClock, FaCalendar } from 'react-icons/fa';
import Loader from '../components/Loader';
import Error from '../components/Error';
import SongCard from '../components/SongCard';

const SongDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [song, setSong] = useState(null);
  const [relatedSongs, setRelatedSongs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const { currentSong, isPlaying } = useSelector((state) => state.player);

  useEffect(() => {
    const loadSongDetails = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const songData = await fetchSongById(id);
        setSong(songData);

        const related = await fetchRelatedSongs(songData.genre, songData.id);
        setRelatedSongs(related);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    loadSongDetails();
  }, [id]);

  const handlePlayClick = () => {
    if (currentSong?.id === song.id) {
      dispatch(playPause(!isPlaying));
    } else {
      dispatch(setActiveSong({ song, index: 0, playlist: [song] }));
      dispatch(playPause(true));
    }
  };

  const formatDuration = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (isLoading) {
    return (
      <div className="p-8">
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-8">
        <Error message={error} />
      </div>
    );
  }

  if (!song) {
    return (
      <div className="p-8">
        <Error message="Song not found" />
      </div>
    );
  }

  const isCurrentSong = currentSong?.id === song.id;

  return (
    <div className="p-8">
      {/* Back Button */}
      <Link
        to="/"
        className="inline-flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary mb-8 transition-colors"
      >
        <FaArrowLeft />
        <span>Back to Discover</span>
      </Link>

      {/* Song Header */}
      <div className="bg-gradient-to-b from-primary/20 to-transparent dark:from-primary/10 rounded-lg p-8 mb-8">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
          <img
            src={song.coverArt}
            alt={song.title}
            className="w-64 h-64 rounded-lg shadow-2xl object-cover"
          />

          <div className="flex-1">
            <div className="mb-4">
              <span className="bg-primary text-white text-xs px-3 py-1 rounded-full">
                {song.genre}
              </span>
            </div>
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {song.title}
            </h1>
            <p className="text-2xl text-gray-700 dark:text-gray-300 mb-6">
              {song.artist}
            </p>

            <div className="flex items-center gap-6 text-gray-600 dark:text-gray-400 mb-8">
              <div className="flex items-center gap-2">
                <FaCalendar />
                <span>{song.releaseDate}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaClock />
                <span>{formatDuration(song.duration)}</span>
              </div>
            </div>

            <button
              onClick={handlePlayClick}
              className="bg-primary hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-3 transition-all hover:scale-105"
            >
              {isCurrentSong && isPlaying ? (
                <>
                  <FaPause className="text-xl" />
                  Pause
                </>
              ) : (
                <>
                  <FaPlay className="text-xl" />
                  Play
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Song Details */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2 bg-white dark:bg-lightDark rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Lyrics
          </h2>
          <div className="text-gray-700 dark:text-gray-300 whitespace-pre-line leading-relaxed">
            {song.lyrics}
          </div>
        </div>

        <div className="bg-white dark:bg-lightDark rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Album Info
          </h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Album</p>
              <p className="font-semibold">{song.album}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Artist</p>
              <p className="font-semibold">{song.artist}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Genre</p>
              <p className="font-semibold">{song.genre}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Release Year
              </p>
              <p className="font-semibold">{song.releaseDate}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Songs */}
      {relatedSongs.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Related Songs
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {relatedSongs.map((relatedSong, index) => (
              <SongCard
                key={relatedSong.id}
                song={relatedSong}
                index={index}
                playlist={relatedSongs}
                isPlaying={isPlaying}
                activeSong={currentSong}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SongDetails;
