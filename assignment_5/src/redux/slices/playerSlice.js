import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentSong: null,
  currentIndex: 0,
  isPlaying: false,
  isActive: false,
  volume: 0.5,
  duration: 0,
  currentTime: 0,
  playlist: [],
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
    },
    playPause: (state, action) => {
      state.isPlaying = action.payload;
    },
    nextSong: (state) => {
      if (state.currentIndex < state.playlist.length - 1) {
        state.currentIndex += 1;
        state.currentSong = state.playlist[state.currentIndex];
      } else {
        state.currentIndex = 0;
        state.currentSong = state.playlist[0];
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
    },
    setVolume: (state, action) => {
      state.volume = action.payload;
    },
    setCurrentTime: (state, action) => {
      state.currentTime = action.payload;
    },
    setDuration: (state, action) => {
      state.duration = action.payload;
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
} = playerSlice.actions;

export default playerSlice.reducer;
