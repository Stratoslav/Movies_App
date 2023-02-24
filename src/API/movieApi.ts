//components
import { AppDispatch } from '../redux/store';
import { imagesMovieActions } from '../redux/movieDetailsSlice';
import { ActorActions } from '../redux/movieActorSlice';
import { popularMoviesAction } from '../redux/movieSlice';
import { peopleMovieActions } from '../redux/peopleSlice';
import { apiKey } from '../Components/ApiKey';
//lib
import axios from 'axios';

const mainProtocol = 'https://api.themoviedb.org/3';
// const dispatch = useDispatch<AppDispatch>()
export const getMovieImage = (id: string, dispatch: AppDispatch) => {
  axios
    .get(
      ` 
${mainProtocol}/movie/${id}/images?api_key=${apiKey}   `
    )
    .then(({ data }) => {
      dispatch(imagesMovieActions.getImageDetails(data));
    });
};

export const getActor = (actorId: number, dispatch: AppDispatch): any => {
  axios
    .get(`${mainProtocol}/person/${actorId}?api_key=${apiKey}`)
    .then(({ data }) => {
      dispatch(ActorActions.addActor(data));
    });
};
export const getPopularMovies = (dispatch: AppDispatch) => {
  axios
    .get(`${mainProtocol}/trending/all/day?api_key=${apiKey}`)
    .then(({ data }) => {
      dispatch(popularMoviesAction.getPopularMovies(data.results));
    });
};

export const searchMovie = (query: string, dispatch: AppDispatch) => {
  try {
    if (query.length > 0) {
      axios

        .get(`${mainProtocol}/search/movie?api_key=${apiKey}&query=${query}`)
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
${mainProtocol}/person/${id}?api_key=${apiKey}`
    )
    .then(({ data }) => {
      console.log(data);
      dispatch(peopleMovieActions.getPersonDetails(data));
    });
};

export const getPersonMovie = (
  id: string | undefined,
  dispatch: AppDispatch
) => {
  axios
    .get(
      `
${mainProtocol}/person/${id}/movie_credits?api_key=${apiKey}`
    )
    .then(({ data }) => {
      dispatch(peopleMovieActions.getPersonMovie(data));
    });
};

export const getPopularMovie = (dispatch: AppDispatch) => {
  axios
    .get(`https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}`)
    .then(({ data }) => {
      dispatch(popularMoviesAction.getPopularMovies(data.results));
    });
};
export const getMovieDetails = (
  id: string | undefined,
  dispatch: AppDispatch
) => {
  axios
    .get(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`)
    .then(({ data }) => {
      // setMovie(data);
      dispatch(imagesMovieActions.getMovieDetails(data));
    });
  if (id) {
    getMovieImage(id, dispatch);
  }
};

export const getPeople = (query: string, dispatch: AppDispatch) => {
  axios
    .get(
      `

https://api.themoviedb.org/3/search/person?api_key=${apiKey}&query=${query}`
    )
    .then(({ data }) => {
      dispatch(peopleMovieActions.getPeopleDetails(data));
    });
};
