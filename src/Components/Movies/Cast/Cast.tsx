import React, { MouseEventHandler } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Axios from 'axios';
import { apiKey } from '../../apiKey';
import routes from '../../../routes';
import { Actors } from '../Actors/Actors';
import { ActorTypes } from '../../../types';
import { ActorActions } from '../../../redux/movieActorSlice';
// import {AppDispatch} from '../../redux/store'
type ActorsType = {
  id: number;
  name: string;
  character: string;
  profile_path: string;
};
const Cast = () => {
  const [actors, setActors] = useState([]);
  const dispatch = useDispatch();
  //  const [actor, setActor] = useState<ActorTypes>(Object)
  const { id } = useParams();

  const getActor = (actorId: number): any => {
    Axios.get(
      `https://api.themoviedb.org/3/person/${actorId}?api_key=${apiKey}`
    ).then(({ data }) => {
      console.log(data);
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
             <NavLink to="/actor">
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
