import { createSlice } from '@reduxjs/toolkit';
import { userPreferences } from '../../utils/localStorage';

const initialState = {
  currentSong: null,
  currentIndex: 0,
  isPlaying: false,
  isActive: false,
  volume: userPreferences.getVolume(),
  duration: 0,
  currentTime: 0,
  playlist: [],
  isShuffle: false,
  isRepeat: false,
};

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setActiveSong: (state, action) => {
      state.currentSong = action.payload.song;
      state.currentIndex = action.payload.index;
      state.playlist = action.payload.playlist;
      state.isActive = true;
      
      // Save to localStorage
      userPreferences.saveLastPlayed(action.payload.song);
    },
    playPause: (state, action) => {
      state.isPlaying = action.payload;
    },
    nextSong: (state) => {
      if (state.isShuffle) {
        // Random song (excluding current)
        const availableIndices = state.playlist
          .map((_, idx) => idx)
          .filter(idx => idx !== state.currentIndex);
        const randomIndex = availableIndices[
          Math.floor(Math.random() * availableIndices.length)
        ];
        state.currentIndex = randomIndex;
        state.currentSong = state.playlist[randomIndex];
      } else if (state.currentIndex < state.playlist.length - 1) {
        state.currentIndex += 1;
        state.currentSong = state.playlist[state.currentIndex];
      } else {
        state.currentIndex = 0;
        state.currentSong = state.playlist[0];
      }
      
      // Save to localStorage
      if (state.currentSong) {
        userPreferences.saveLastPlayed(state.currentSong);
      }
    },
    prevSong: (state) => {
      if (state.currentIndex > 0) {
        state.currentIndex -= 1;
        state.currentSong = state.playlist[state.currentIndex];
      } else {
        state.currentIndex = state.playlist.length - 1;
        state.currentSong = state.playlist[state.currentIndex];
      }
      
      // Save to localStorage
      if (state.currentSong) {
        userPreferences.saveLastPlayed(state.currentSong);
      }
    },
    setVolume: (state, action) => {
      state.volume = action.payload;
      // Persist volume preference
      userPreferences.saveVolume(action.payload);
    },
    setCurrentTime: (state, action) => {
      state.currentTime = action.payload;
      
      // Save playback position every 5 seconds
      if (state.currentSong && Math.floor(action.payload) % 5 === 0) {
        userPreferences.savePlaybackPosition(
          state.currentSong.id,
          action.payload
        );
      }
    },
    setDuration: (state, action) => {
      state.duration = action.payload;
    },
    toggleShuffle: (state) => {
      state.isShuffle = !state.isShuffle;
    },
    toggleRepeat: (state) => {
      state.isRepeat = !state.isRepeat;
    },
    restorePlaybackPosition: (state, action) => {
      const position = userPreferences.getPlaybackPosition(action.payload);
      state.currentTime = position;
    },
  },
});

export const {
  setActiveSong,
  playPause,
  nextSong,
  prevSong,
  setVolume,
  setCurrentTime,
  setDuration,
  toggleShuffle,
  toggleRepeat,
  restorePlaybackPosition,
} = playerSlice.actions;

export default playerSlice.reducer;
