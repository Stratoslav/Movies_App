import React, { ChangeEvent, FormEvent } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { apiKey } from '../../ApiKey';
type MoviesSearchType = {
  id: number;
  original_title: string;
  backdrop_path: string;
  overview: string;
  release_date: string;
};
const MoviesPage = () => {
  const [topMovie, setTopMovie] = useState([]);
  const [query, setQuery] = useState('');

  const getMovie = (query: string) => {
    try {
      if (query.length > 0) {
        axios

          .get(
            `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`
          )
          .then(({ data }) => {
            setTopMovie(data.results);
            console.log(data.results);
          });
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleChangeForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getMovie(query);
  };
  const onChangeQuery = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.currentTarget.value);
  };

  return (
    <>
      <h1>Movie Page</h1>
      <form onSubmit={handleChangeForm}>
        <input onChange={onChangeQuery} type="text" value={query} />
        <button type="submit">Find</button>
      </form>
      <ul>
        {topMovie.map(
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
        )}
      </ul>
    </>
  );
};

export default MoviesPage;
