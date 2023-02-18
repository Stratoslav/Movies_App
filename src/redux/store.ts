import { configureStore } from '@reduxjs/toolkit';
import { ActorReducer } from './movieActorSlice';
import { imagesMovieReducer } from './movieDetails';

export const store = configureStore({
  reducer: {
        actor: ActorReducer,
      imageDetails: imagesMovieReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
