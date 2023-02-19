import { useParams, useNavigate, NavLink, Outlet } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import Axios from 'axios';
import { apiKey } from '../../ApiKey';
import { MovieDetailsTypes } from '../../../types';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { imagesMovieActions } from '../../../redux/movieDetailsSlice';
import { RootState } from '../../../redux/store';

import './details.scss';
import { MovieDetailsImage } from './MovieDetailsImage';
import { MovieDetailsVideo } from './MovieDetailsVideo';
const shortId = require('shortid');
const MovieDetails = () => {
  const [movie, setMovie] = useState<MovieDetailsTypes>(Object);
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let [isImage, setIsImage] = useState(false);
  const goToBack = () => navigate(-1);

  const getMovieImage = (id: string) => {
    axios
      .get(
        ` 
https://api.themoviedb.org/3/movie/${id}/images?api_key=${apiKey}   `
      )
      .then(({ data }) => {
        dispatch(imagesMovieActions.getImageDetails(data));
      });
  };
  const getMovieVideo = (id: string) => {
    Axios.get(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}`
    ).then(({ data }) => {
      dispatch(imagesMovieActions.getVideoDetails(data));
    });
  };

  useEffect(() => {
    Axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`
    ).then(({ data }) => {
      setMovie(data);
    });
    if (id) {
      getMovieImage(id);
      getMovieVideo(id);
    }
  }, [id]);

  return (
    <>
      <section className="details">
        <button className="back-button" onClick={goToBack}>
          Back
        </button>
        <div className="background">
          <img
            className="details__img"
            src={
              movie.backdrop_path
                ? `	https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${movie.backdrop_path}`
                : 'https://pibig.info/uploads/posts/2022-12/1669910493_1-pibig-info-p-kosmos-zadnii-fon-krasivo-1.jpg'
            }
            alt=""
          />
        </div>

        <div className="details__wrap">
          <div className="wrap-1">
            <h1 className="details__title"> {movie.original_title}</h1>

            <img
              className="details__backdrop"
              width="300"
              src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`}
              alt={movie.backdrop_path}
            />
          </div>
          <div className="wrap-2">
            <p className="details__date">{movie.release_date}</p>
            <p className="details__status">
              <big style={{ fontWeight: 500 }}>status:</big> {movie.status}
            </p>
            <div className="details__tagline">
              <big style={{ fontWeight: 500 }}>tagline:</big> {movie.tagline}
            </div>
            <div className="details__average">
              <span className="details__average-score">
                <big style={{ fontWeight: 500 }}> User Score: </big>
                {movie.vote_average}
              </span>
              <span className="details__average-vote">
                <big style={{ fontWeight: 500 }}>Vote:</big>
                {movie.vote_count}
              </span>
            </div>
            <big style={{ fontWeight: 500 }}>Genre:</big>
            {movie.genres &&
              movie.genres.map((genre) => (
                <span className="details__genre" key={genre.id}>
                  {genre.name}
                </span>
              ))}
            <div className="details__popularity">
              <big style={{ fontWeight: 500 }}>popularity:</big>{' '}
              {movie.popularity}
            </div>
            <div className="details__overview">
              <big style={{ fontWeight: 500 }}> Overview:</big> <br />
              <p className="details__overview-text"> {movie.overview}</p>
              <div className="details__company">
                <big style={{ fontWeight: 500 }}>Production:</big>{' '}
                {movie.production_companies &&
                  movie.production_companies.map((company) => (
                    <p key={company.id} className="details__company-prod">
                      {' '}
                      {company.name}
                    </p>
                  ))}
              </div>
            </div>
          </div>
        </div>
        <p onClick={() => setIsImage(true)}>Videos</p>
        <p onClick={() => setIsImage(false)}>Images</p>

        {isImage === true ? <MovieDetailsVideo /> : <MovieDetailsImage />}
      </section>

      <NavLink to="review">Review</NavLink>
      <NavLink to="credits">Credits</NavLink>
      <Outlet />
    </>
  );
};

export default MovieDetails;
