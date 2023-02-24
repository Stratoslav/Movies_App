import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AllMovies } from '../types/AllMovies';
import { SearchedMovieType } from '../types/PeopleType';




const initialState = {
  movies: [] as AllMovies[],
  searchedMovie: [] as SearchedMovieType[]
};

const MoviesSlice = createSlice({
  name: 'movies/get',
  initialState,
  reducers: {
    getPopularMovies: (state, action: PayloadAction<AllMovies[]>) => {
      state.movies = action.payload;
    },
    getSearchMovies: (state, action: PayloadAction<SearchedMovieType[]>) => {
      console.log(action.payload);
      state.searchedMovie = action.payload;
    }
  }
});

export const { reducer: popularMoviesReducer, actions: popularMoviesAction } =
  MoviesSlice;
