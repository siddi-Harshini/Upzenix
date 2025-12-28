// LocalStorage utility functions for persistent state

export const storage = {
  // Get item from localStorage
  getItem: (key) => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error(`Error getting item ${key} from localStorage:`, error);
      return null;
    }
  },

  // Set item in localStorage
  setItem: (key, value) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (error) {
      console.error(`Error setting item ${key} in localStorage:`, error);
      return false;
    }
  },

  // Remove item from localStorage
  removeItem: (key) => {
    try {
      window.localStorage.removeItem(key);
      return true;
    } catch (error) {
      console.error(`Error removing item ${key} from localStorage:`, error);
      return false;
    }
  },

  // Clear all localStorage
  clear: () => {
    try {
      window.localStorage.clear();
      return true;
    } catch (error) {
      console.error('Error clearing localStorage:', error);
      return false;
    }
  },
};

// Specific storage keys
export const STORAGE_KEYS = {
  THEME: 'spotify_theme',
  VOLUME: 'spotify_volume',
  LAST_PLAYED: 'spotify_last_played',
  PREFERRED_GENRE: 'spotify_preferred_genre',
  PLAYBACK_POSITION: 'spotify_playback_position',
  RECENT_SONGS: 'spotify_recent_songs',
};

// User preferences helper functions
export const userPreferences = {
  // Save theme preference
  saveTheme: (darkMode) => {
    storage.setItem(STORAGE_KEYS.THEME, darkMode);
  },

  // Get theme preference
  getTheme: () => {
    const theme = storage.getItem(STORAGE_KEYS.THEME);
    return theme !== null ? theme : true; // Default to dark mode
  },

  // Save volume preference
  saveVolume: (volume) => {
    storage.setItem(STORAGE_KEYS.VOLUME, volume);
  },

  // Get volume preference
  getVolume: () => {
    const volume = storage.getItem(STORAGE_KEYS.VOLUME);
    return volume !== null ? volume : 0.5; // Default to 50%
  },

  // Save last played song
  saveLastPlayed: (song) => {
    storage.setItem(STORAGE_KEYS.LAST_PLAYED, song);
  },

  // Get last played song
  getLastPlayed: () => {
    return storage.getItem(STORAGE_KEYS.LAST_PLAYED);
  },

  // Save preferred genre
  savePreferredGenre: (genre) => {
    storage.setItem(STORAGE_KEYS.PREFERRED_GENRE, genre);
  },

  // Get preferred genre
  getPreferredGenre: () => {
    const genre = storage.getItem(STORAGE_KEYS.PREFERRED_GENRE);
    return genre || 'All';
  },

  // Save playback position
  savePlaybackPosition: (songId, position) => {
    const positions = storage.getItem(STORAGE_KEYS.PLAYBACK_POSITION) || {};
    positions[songId] = position;
    storage.setItem(STORAGE_KEYS.PLAYBACK_POSITION, positions);
  },

  // Get playback position
  getPlaybackPosition: (songId) => {
    const positions = storage.getItem(STORAGE_KEYS.PLAYBACK_POSITION) || {};
    return positions[songId] || 0;
  },

  // Save recent songs (maintain last 20)
  saveRecentSong: (song) => {
    let recentSongs = storage.getItem(STORAGE_KEYS.RECENT_SONGS) || [];
    
    // Remove if already exists
    recentSongs = recentSongs.filter(s => s.id !== song.id);
    
    // Add to beginning
    recentSongs.unshift(song);
    
    // Keep only last 20
    recentSongs = recentSongs.slice(0, 20);
    
    storage.setItem(STORAGE_KEYS.RECENT_SONGS, recentSongs);
  },

  // Get recent songs
  getRecentSongs: () => {
    return storage.getItem(STORAGE_KEYS.RECENT_SONGS) || [];
  },

  // Clear all preferences
  clearAllPreferences: () => {
    Object.values(STORAGE_KEYS).forEach(key => {
      storage.removeItem(key);
    });
  },
};
