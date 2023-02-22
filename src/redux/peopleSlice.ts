import { PeopleDetailsType, PeopleTypes, PersonMovie } from './../types/peopleType';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  peoples: [] as PeopleTypes[],
  peopleDetails: {} as PeopleDetailsType,
movies: {} as PersonMovie,
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
    },
    getPersonMovie: (state, action: PayloadAction<PersonMovie>) => {
      state.movies = action.payload
      
    }
  }
});

export const { reducer: peopleMovieReducer, actions: peopleMovieActions } =
  movieActor;
