import { AppDispatch } from '../redux/store';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { apiKey } from '../Components/ApiKey';
import { imagesMovieActions } from '../redux/movieDetailsSlice';
import { ActorActions } from '../redux/movieActorSlice';
import { popularMoviesAction } from '../types/movieTypes';
import { peopleMovieActions } from '../redux/peopleSlice';

export const getMovieImage = (id: string, dispatch: AppDispatch) => {
  axios
    .get(
      ` 
https://api.themoviedb.org/3/movie/${id}/images?api_key=${apiKey}   `
    )
    .then(({ data }) => {
      dispatch(imagesMovieActions.getImageDetails(data));
    });
};

export const getActor = (actorId: number, dispatch: AppDispatch): any => {
  axios
    .get(`https://api.themoviedb.org/3/person/${actorId}?api_key=${apiKey}`)
    .then(({ data }) => {
      dispatch(ActorActions.addActor(data));
    });
};
export const getPopularMovies = (dispatch: AppDispatch) => {
  axios
    .get(`https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}`)
    .then(({ data }) => {
      dispatch(popularMoviesAction.getPopularMovies(data.results));
    });
};

export const searchMovie = (query: string, dispatch: AppDispatch) => {
  try {
    if (query.length > 0) {
      axios

        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`
        )
        .then(({ data }) => {
          dispatch(popularMoviesAction.getSearchMovies(data.results));
        });
    }
  } catch (e) {
    console.log(e);
  }
};

export const getPersonData = (
  id: string | undefined,
  dispatch: AppDispatch
) => {
  axios
    .get(
      `


https://api.themoviedb.org/3/person/${id}?api_key=${apiKey}`
    )
    .then(({ data }) => {
      console.log(data);
      dispatch(peopleMovieActions.getPersonDetails(data));
    });
};
