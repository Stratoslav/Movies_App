//react
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
//components
import './homePage.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { getPopularMovie } from '../../../API/movieApi';

const HomePage = () => {
  const { movies } = useSelector((s: RootState) => s.popularMovies);
  const dispatch = useDispatch();

  console.log(movies);
  useEffect(() => {
    getPopularMovie(dispatch);
  }, [dispatch]);

  return (
    <div>
      <h1 className="page_title">Top movies on this week</h1>
      <ul className="page_list">
        {movies.map(
          ({
            id,
            original_title,
            release_date,
            name,
            first_air_date,
            poster_path,
            overview
          }) => (
            <li className={'page_list_item'} key={id}>
              <NavLink className={'page_list_link'} to={`/movies/${id}`}>
                <img
                  src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${poster_path}`}
                  alt=""
                />
                <h3 className="page_list-title">
                  {original_title ? original_title : name}
                </h3>
                <p>
                  {overview.length > 80
                    ? `${overview.slice(0, 80)}...`
                    : overview}
                </p>
                <div>{release_date ? release_date : first_air_date}</div>
              </NavLink>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default HomePage;
