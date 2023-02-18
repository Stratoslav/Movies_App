import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import './homePage.scss';
import { apiKey } from '../../ApiKey';

type AllMovies = {
  adult: boolean;
  backdrop_path: string;
  first_air_date?: string;
  id: number;
  name: string;
  title?: string;
  original_language?: string;
  original_title: string;
  overview: string;
  poster_path: string;
  media_type?: string;
  genre_ids?: number[];
  popularity?: number;
  release_date: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
};

const HomePage = () => {
  const [movies, setMovies] = useState<AllMovies[]>([]);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}`)
      .then(({ data }) => {
        setMovies(data.results);
      });
  }, []);

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

                <p>{original_title ? original_title : name}</p>
                <p>
                  {overview.length > 80
                    ? `${overview.slice(0, 80)}...`
                    : overview}
                </p>
                <div>
                  release date: {release_date ? release_date : first_air_date}
                </div>
              </NavLink>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default HomePage;
