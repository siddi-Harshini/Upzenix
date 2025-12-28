import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchSongs, fetchSongsByGenre } from '../../services/api';

export const getSongs = createAsyncThunk(
  'songs/getSongs',
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetchSongs();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getSongsByGenre = createAsyncThunk(
  'songs/getSongsByGenre',
  async (genre, { rejectWithValue }) => {
    try {
      const data = await fetchSongsByGenre(genre);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  songs: [],
  topCharts: [],
  genres: ['Pop', 'Hip-Hop', 'Rock', 'Electronic', 'R&B', 'Jazz', 'Country', 'Classical'],
  selectedGenre: 'All',
  isLoading: false,
  error: null,
};

const songsSlice = createSlice({
  name: 'songs',
  initialState,
  reducers: {
    setGenre: (state, action) => {
      state.selectedGenre = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSongs.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getSongs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.songs = action.payload;
        state.topCharts = action.payload.slice(0, 5);
      })
      .addCase(getSongs.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getSongsByGenre.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getSongsByGenre.fulfilled, (state, action) => {
        state.isLoading = false;
        state.songs = action.payload;
      })
      .addCase(getSongsByGenre.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { setGenre } = songsSlice.actions;

export default songsSlice.reducer;
