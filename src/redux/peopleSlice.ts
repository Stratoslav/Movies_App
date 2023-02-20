import { PeopleTypes } from './../types/peopleType';
import { MovieImage, MovieVideoDetails } from '../types/MovieDetails';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  peoples: [] as PeopleTypes[]
};

const movieActor = createSlice({
  name: 'people/actors',
  initialState: initialState,
  reducers: {
    getPeopleDetails: (state, action) => {
      console.log(action.payload.results);
      state.peoples = action.payload.results;
    }
  }
});

export const { reducer: peopleMovieReducer, actions: peopleMovieActions } =
  movieActor;
