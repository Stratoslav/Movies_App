import React from "react";
import { useParams, useNavigate, NavLink, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import Axios from "axios";
import { apiKey } from "../apiKey";

const MovieDetails = () => {
  const [movie, setMovie] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  const goToBack = () => navigate(-1);

  useEffect(() => {
    Axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`
    ).then(({ data }) => {
      setMovie(data);
    });
  }, [id]);

  return (
    <>
      <br />
      <button onClick={goToBack}>Back</button>
      <h1> {movie.original_title}</h1>
      <div>
        <img
          width="300"
          src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`}
          alt={movie.backdrop_path}
        />
        <p>User Score: {movie.vote_average}</p>
        <div>
          Overview: <br />
          {movie.overview}
        </div>
      </div>
      <NavLink to="review">Review</NavLink>
      <NavLink to="credits">Credits</NavLink>
      <Outlet />
    </>
  );
};

export default MovieDetails;
