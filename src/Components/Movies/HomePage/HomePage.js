import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import styles from "../HomePage/homePage.module.css";
import { apiKey } from "../../apiKey";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}`)
      .then(({ data }) => {
        setMovies(data.results);
        console.log(data.results);
      });
  }, []);

  return (
    <div>
      <h1 className={styles.page_title}>Top movies on this week</h1>
      <ul className={styles.page_list}>
        {movies.map(({ id, original_title, poster_path }) => (
          <li className={styles.page_list_item} key={id}>
            <img
              src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${poster_path}`}
              alt=""
            />
            <p>
              <NavLink className={styles.page_list_link} to={`/movies/${id}`}>
                {original_title}
              </NavLink>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
