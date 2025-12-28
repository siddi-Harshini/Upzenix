import { createSlice } from '@reduxjs/toolkit';
import { userPreferences } from '../../utils/localStorage';

const initialState = {
  darkMode: userPreferences.getTheme(),
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.darkMode = !state.darkMode;
      // Persist theme preference
      userPreferences.saveTheme(state.darkMode);
    },
    setTheme: (state, action) => {
      state.darkMode = action.payload;
      // Persist theme preference
      userPreferences.saveTheme(action.payload);
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;

export default themeSlice.reducer;
