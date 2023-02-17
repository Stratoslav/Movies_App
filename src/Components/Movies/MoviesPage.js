import React from "react";
import { useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { apiKey } from "../apiKey";

const MoviesPage = () => {
  const [topMovie, setTopMovie] = useState([]);
  const [query, setQuery] = useState("");

  const fetchImages = (query) => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`
      )
      .then(({ data }) => {
        setTopMovie(data.results);
      });
  };

  const handleChangeForm = (e) => {
    e.preventDefault();
    fetchImages(query);
  };
  const onChangeQuery = (e) => {
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
        {topMovie.map(({ id, original_title }) => (
          <li key={id}>
            <NavLink to={`/movies/${id}`}>{original_title}</NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MoviesPage;
