import { configureStore } from '@reduxjs/toolkit';
import { popularMoviesReducer } from './movieSlice';
import { ActorReducer } from './movieActorSlice';
import { imagesMovieReducer } from './movieDetailsSlice';
import { peopleMovieReducer } from './peopleSlice';

export const store = configureStore({
  reducer: {
    actor: ActorReducer,
    imageDetails: imagesMovieReducer,
    popularMovies: popularMoviesReducer,
    people: peopleMovieReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
