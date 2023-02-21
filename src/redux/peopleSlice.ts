import { PeopleDetailsType, PeopleTypes } from './../types/peopleType';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  peoples: [] as PeopleTypes[],
  peopleDetails: {} as PeopleDetailsType
};

const movieActor = createSlice({
  name: 'people/actors',
  initialState: initialState,
  reducers: {
    getPeopleDetails: (state, action) => {
      // continue
      state.peoples = action.payload.results;
    },
    getPersonDetails: (state, action) => {
      console.log(action.payload);
      state.peopleDetails = action.payload;
    }
  }
});

export const { reducer: peopleMovieReducer, actions: peopleMovieActions } =
  movieActor;
