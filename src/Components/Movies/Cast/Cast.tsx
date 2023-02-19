//react
import { NavLink, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
//lib
import Axios from 'axios';
//component
import { apiKey } from '../../ApiKey';
import { ActorActions } from '../../../redux/movieActorSlice';
import { ActorsType } from '../../../types';


const Cast = () => {
  const [actors, setActors] = useState([]);
  const dispatch = useDispatch();

  const { id } = useParams();

  const getActor = (actorId: number): any => {
    Axios.get(
      `https://api.themoviedb.org/3/person/${actorId}?api_key=${apiKey}`
    ).then(({ data }) => {
     
      dispatch(ActorActions.addActor(data));
    });
  };

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
      <h1>actors</h1>
      <ul>
        {actors.map(({ id, name, character, profile_path }: ActorsType) => (
          <li key={id} onClick={() => getActor(id)}>
            <NavLink to={`/actor/${id}`}>
              <img
                width={120}
                src={
                  profile_path
                    ? `https://www.themoviedb.org/t/p/w138_and_h175_face${profile_path}`
                    : 'https://i.pinimg.com/originals/f1/0f/f7/f10ff70a7155e5ab666bcdd1b45b726d.jpg'
                }
                alt="im"
              />
              <span>{character}</span>
              <p>{name}</p>
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Cast;
