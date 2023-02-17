import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Axios from "axios";
import { apiKey } from "../apiKey";

const Cast = () => {
  const [actors, setActors] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    Axios.get(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}`
    ).then(({ data }) => {
      setActors(data.cast);
    });
  }, [id]);
  return (
    <>
      <h1>actors</h1>
      <ul>
        {actors.map(({ id, name, characters, profile_path }) => (
          <li key={id}>
            <img
              src={`https://www.themoviedb.org/t/p/w138_and_h175_face${profile_path}`}
              alt="im"
            />
            <p>{name}</p>
            <span>Character: {characters}</span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Cast;
