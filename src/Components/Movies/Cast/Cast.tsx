//react
import { NavLink, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
//lib
import Axios from 'axios';
//component
import { apiKey } from '../../ApiKey';

import { ActorsType } from '../../../types';
//styles
import './cast.scss';
import { getActor } from '../../../API/movieApi';

const Cast = () => {
  const [actors, setActors] = useState([]);
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    try {
      if (id) {
        Axios.get(
          `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}`
        ).then(({ data }) => {
          setActors(data.cast);
        });
      }
    } catch (error) {
      console.log(error);
    }
  }, [id]);
  return (
    <>
      <ul className="cast__list">
        {actors.map(({ id, name, character, profile_path }: ActorsType) => (
          <li
            className="cast__list-item"
            key={id}
            onClick={() => getActor(id, dispatch)}
          >
            <NavLink to={`/actor/${id}`}>
              <img
                className="cast__list-img"
                width={120}
                src={
                  profile_path
                    ? `https://www.themoviedb.org/t/p/w138_and_h175_face${profile_path}`
                    : 'https://i.pinimg.com/originals/f1/0f/f7/f10ff70a7155e5ab666bcdd1b45b726d.jpg'
                }
                alt="im"
              />
              <p className="actor-character">{character}</p>
              <p className="actor-name">{name}</p>
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Cast;
