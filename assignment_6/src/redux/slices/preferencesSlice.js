import { createSlice } from '@reduxjs/toolkit';
import { userPreferences } from '../../utils/localStorage';

const initialState = {
  recentSongs: userPreferences.getRecentSongs(),
  preferredGenre: userPreferences.getPreferredGenre(),
  lastPlayedSong: userPreferences.getLastPlayed(),
  listeningHistory: [],
  favoriteGenres: [],
};

const preferencesSlice = createSlice({
  name: 'preferences',
  initialState,
  reducers: {
    addRecentSong: (state, action) => {
      const song = action.payload;
      
      // Remove if already exists
      state.recentSongs = state.recentSongs.filter(s => s.id !== song.id);
      
      // Add to beginning
      state.recentSongs.unshift(song);
      
      // Keep only last 20
      state.recentSongs = state.recentSongs.slice(0, 20);
      
      // Save to localStorage
      userPreferences.saveRecentSong(song);
    },
    
    setPreferredGenre: (state, action) => {
      state.preferredGenre = action.payload;
      // Save to localStorage
      userPreferences.savePreferredGenre(action.payload);
    },
    
    updateLastPlayed: (state, action) => {
      state.lastPlayedSong = action.payload;
      // Save to localStorage
      userPreferences.saveLastPlayed(action.payload);
    },
    
    addToHistory: (state, action) => {
      const song = action.payload;
      const timestamp = new Date().toISOString();
      
      state.listeningHistory.unshift({
        song,
        timestamp,
      });
      
      // Keep only last 100 items
      state.listeningHistory = state.listeningHistory.slice(0, 100);
    },
    
    updateFavoriteGenres: (state, action) => {
      const genre = action.payload;
      
      const existingGenre = state.favoriteGenres.find(g => g.name === genre);
      
      if (existingGenre) {
        existingGenre.count += 1;
      } else {
        state.favoriteGenres.push({ name: genre, count: 1 });
      }
      
      // Sort by count
      state.favoriteGenres.sort((a, b) => b.count - a.count);
    },
    
    clearRecentSongs: (state) => {
      state.recentSongs = [];
      storage.removeItem(STORAGE_KEYS.RECENT_SONGS);
    },
    
    clearHistory: (state) => {
      state.listeningHistory = [];
    },
  },
});

export const {
  addRecentSong,
  setPreferredGenre,
  updateLastPlayed,
  addToHistory,
  updateFavoriteGenres,
  clearRecentSongs,
  clearHistory,
} = preferencesSlice.actions;

export default preferencesSlice.reducer;
