import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ActorTypes } from '../types/ActorTypes';

const initialState = { actor: {} as ActorTypes };

const movieActor = createSlice({
  name: 'movie/actor',
  initialState: initialState,
  reducers: {
    addActor: (state, action: PayloadAction<ActorTypes>) => {
      state.actor = action.payload;
    }
  }
});

export const { reducer: ActorReducer, actions: ActorActions } = movieActor;
