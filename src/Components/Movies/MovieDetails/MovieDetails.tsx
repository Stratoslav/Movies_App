
import { useParams, useNavigate, NavLink, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import { apiKey } from '../../ApiKey';
import { MovieDetailsTypes } from '../../../types';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { imagesMovieActions } from '../../../redux/movieDetails';
import { RootState } from '../../../redux/store';
import uniqid from 'uniqid';
const shortId = require('shortid')
const MovieDetails = () => {
  const [movie, setMovie] = useState<MovieDetailsTypes>(Object);
  const { id } = useParams();
  const navigate = useNavigate();
    const dispatch = useDispatch()
    const images = useSelector((s: RootState) => s.imageDetails.images)
  const goToBack = () => navigate(-1);
  const getMovieImage = (id: number | string) => {
    axios
      .get(
        ` 
https://api.themoviedb.org/3/movie/${id}/images?api_key=${apiKey}   `
      )
        .then(({ data }) => {
          dispatch(imagesMovieActions.getImageDetails(data))
      });
  };
  useEffect(() => {
    Axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`
    ).then(({ data }) => {
      setMovie(data);
      console.log(data);
    });
    getMovieImage(id);
  }, [id]);

  return (
    <>
      <br />
      <button onClick={goToBack}>Back</button>
      {/* <img src={`	https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${movie.backdrop_path}`}  alt=""/> */}
      <div>
        <h1> {movie.original_title}</h1>
        <div>
          <img
            width="300"
            src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`}
            alt={movie.backdrop_path}
          />
          <p>{movie.release_date}</p>
          <p>status: {movie.status}</p>
          <div>tagline:{movie.tagline}</div>
          <div>
            <span>User Score: {movie.vote_average}</span>
            <span>Vote:{movie.vote_count}</span>
          </div>

          {movie.genres &&
            movie.genres.map((genre) => (
              <span key={genre.id}>{genre.name}</span>
            ))}
          <div>popularity: {movie.popularity}</div>
          <div>
            Overview: <br />
            {movie.overview}
          </div>
          <h2>Production:</h2>
          {movie.production_companies &&
            movie.production_companies.map((company) => (
              <div key={company.id}>
                <p>{company.name}</p>
                </div>
      
            ))}
              </div>
              <ul> {images.backdrops && images.backdrops.map(image => (
                  <li key={uniqid()}>
                      <img src={`https://www.themoviedb.org/t/p/w533_and_h300_bestv2/${image.file_path}`} alt=''/>
                  </li>
              ))}</ul>
             
      </div>

      <NavLink to="review">Review</NavLink>
      <NavLink to="credits">Credits</NavLink>
      <Outlet />
    </>
  );
};

export default MovieDetails;
// https://www.themoviedb.org/t/p/w533_and_h300_bestv2/mAJ84W6I8I272Da87qplS2Dp9ST.jpg
