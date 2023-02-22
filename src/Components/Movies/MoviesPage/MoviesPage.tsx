//react
import { ChangeEvent, FormEvent, useState } from 'react';
import { NavLink } from 'react-router-dom';
//lin
import axios from 'axios';
//components
import { apiKey } from '../../ApiKey';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { searchMovie } from '../../../API/movieApi';
//styles
import './moviesPage.scss';
type MoviesSearchType = {
  id: number;
  original_title: string;
  backdrop_path: string;
  overview: string;
  release_date: string;
};
const MoviesPage = () => {
  const { searchedMovie } = useSelector((s: RootState) => s.popularMovies);
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const handleChangeForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchMovie(query, dispatch);
  };
  const onChangeQuery = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.currentTarget.value);
  };

  return (
    <div className="movies container">
      <h1>Movie Page</h1>
      <div className="container__item">
        <form className="form" onSubmit={handleChangeForm}>
          <input
            onChange={onChangeQuery}
            value={query}
            type="text"
            className="form__field"
            placeholder="Find movie"
          />
          <button
            type="submit"
            className="btn btn--primary btn--inside uppercase"
          >
            Find
          </button>
        </form>
      </div>
      <ul>
        {searchedMovie.length > 0
          ? searchedMovie.map(
              ({
                id,
                original_title,
                backdrop_path,
                overview,
                release_date
              }: MoviesSearchType) => (
                <li key={id}>
                  <NavLink to={`/movies/${id}`}>
                    <div>
                      <img
                        src={`https://www.themoviedb.org/t/p/w94_and_h141_bestv2/${backdrop_path}`}
                        alt="f"
                      />
                      <h3>{original_title}</h3>
                      <p>{release_date}</p>
                    </div>
                    <div>{overview}</div>
                  </NavLink>
                </li>
              )
            )
          : "Sorry, but film with such name don't exist!"}
      </ul>
    </div>
  );
};

export default MoviesPage;
