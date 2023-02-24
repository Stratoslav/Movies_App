import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { MovieDetailsTypes, MovieImage } from '../types/MovieDetails';

const initialState = {
  images: {} as MovieImage,
  movie: {} as MovieDetailsTypes
};

const movieActor = createSlice({
  name: 'movie/actor',
  initialState: initialState,
  reducers: {
    getImageDetails: (state, action: PayloadAction<MovieImage>) => {
      state.images = action.payload;
    },
    getMovieDetails: (state, action: PayloadAction<MovieDetailsTypes>) => {
      state.movie = action.payload;
    }
  }
});

export const { reducer: imagesMovieReducer, actions: imagesMovieActions } =
  movieActor;
