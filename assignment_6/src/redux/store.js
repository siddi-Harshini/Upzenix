import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from '@reduxjs/toolkit';

import playerReducer from './slices/playerSlice';
import songsReducer from './slices/songsSlice';
import themeReducer from './slices/themeSlice';
import preferencesReducer from './slices/preferencesSlice';

// Persist configuration
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['player', 'theme', 'preferences'], // Only persist these reducers
  blacklist: ['songs'], // Don't persist songs (fetch fresh on load)
};

// Player persist config
const playerPersistConfig = {
  key: 'player',
  storage,
  whitelist: [
    'currentSong',
    'currentIndex',
    'volume',
    'playlist',
    'isActive',
  ],
  blacklist: ['isPlaying', 'currentTime'], // Don't persist playback state
};

// Combine reducers
const rootReducer = combineReducers({
  player: persistReducer(playerPersistConfig, playerReducer),
  songs: songsReducer,
  theme: themeReducer,
  preferences: preferencesReducer,
});

// Create persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});

// Create persistor
export const persistor = persistStore(store);
