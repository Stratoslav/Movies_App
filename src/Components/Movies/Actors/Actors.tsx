import React from 'react';
import { ActorTypes } from '../../../types';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { useNavigate } from 'react-router';

export const Actors = (): any => {
  const actor = useSelector((s: RootState) => s.actor.actor);
  const navigate = useNavigate();
  const makeStepBack = () => {
    navigate(-1);
  };

  console.log(navigate);
  return (
    <>
      <button onClick={makeStepBack}>Back</button>
      <h1>{actor.name}</h1>
      {actor.adult ? '18+' : ''}
      <img
        src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${actor.profile_path}`}
        alt=""
      />

      <p>{actor.biography}</p>
      <div>
        <span>Date of Birthday: {actor.birthday}</span>
        <span>{actor.place_of_birth}</span>
      </div>
      <div>Popularity: {actor.popularity && actor.popularity.toLocaleString().slice(0, 4)}/100</div>
      <p>gender:{actor.gender}</p>
    </>
  );
};
