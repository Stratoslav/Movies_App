import { AllMovies } from './AllMovies';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = { movies: [] as AllMovies[], searchedMovie: [] };

const MoviesSlice = createSlice({
  name: 'movies/get',
  initialState,
  reducers: {
    getPopularMovies: (state, action) => {
      state.movies = action.payload;
    },
    getSearchMovies: (state, action) => {
      state.searchedMovie = action.payload;
    }
  }
});

export const { reducer: popularMoviesReducer, actions: popularMoviesAction } =
  MoviesSlice;
