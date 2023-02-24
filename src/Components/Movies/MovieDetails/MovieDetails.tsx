//react
import { useParams, NavLink, Outlet } from 'react-router-dom';
import { useEffect } from 'react';
//components
import { useDispatch, useSelector } from 'react-redux';
import { MovieDetailsImage } from './MovieDetailsImage';
import { getMovieDetails, getMovieImage } from '../../../API/movieApi';
import { RootState } from '../../../redux/store';
//styles
import './details.scss';

const MovieDetails = () => {
  const dispatch = useDispatch();
  const movie = useSelector((s: RootState) => s.imageDetails.movie);
  const { id } = useParams();
  // const navigate = useNavigate();

  // const goToBack = () => navigate(-1);

  useEffect(() => {
    if (id) {
      getMovieDetails(id, dispatch);
      getMovieImage(id, dispatch);
    }
  }, [id, dispatch]);

  return (
    <>
      <section className="details">
        {/* <button className="back-button" onClick={goToBack}>
          <span></span> Backs
        </button> */}
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
        <h1 className="details__title"> {movie.original_title}</h1>
        <div className="details__wrap">
          <div className="wrap-1">
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

        <MovieDetailsImage />
      </section>
      <div className="more__information-details">
        <NavLink to="review">Review</NavLink>
        <NavLink to="credits">Credits</NavLink>
      </div>

      <Outlet />
    </>
  );
};

export default MovieDetails;
