import { MovieImage, MovieVideoDetails } from '../types/MovieDetails';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  images: {} as MovieImage,
  video: {} as MovieVideoDetails
};

const movieActor = createSlice({
  name: 'movie/actor',
  initialState: initialState,
  reducers: {
    getImageDetails: (state, action: PayloadAction<MovieImage>) => {
      state.images = action.payload;
    },
    getVideoDetails: (state, action) => {
      state.video = action.payload;
    }
  }
});

export const { reducer: imagesMovieReducer, actions: imagesMovieActions } =
  movieActor;
