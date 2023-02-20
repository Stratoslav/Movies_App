import { MovieImage, MovieVideoDetails } from '../types/MovieDetails';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  images: {} as MovieImage
};

const movieActor = createSlice({
  name: 'movie/actor',
  initialState: initialState,
  reducers: {
    getImageDetails: (state, action: PayloadAction<MovieImage>) => {
      state.images = action.payload;
    }
  }
});

export const { reducer: imagesMovieReducer, actions: imagesMovieActions } =
  movieActor;
