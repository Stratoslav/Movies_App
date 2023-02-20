import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { peopleMovieActions } from '../../redux/peopleSlice';
import { RootState } from '../../redux/store';
import { PeopleTypes } from '../../types/peopleType';
import { apiKey } from '../ApiKey';

export const People = () => {
  // const [people, setPeople] = useState<PeopleTypes[]>([])
  const { peoples } = useSelector((s: RootState) => s.people);
  console.log(peoples);
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get(
        `

https://api.themoviedb.org/3/search/person?api_key=${apiKey}&query=${'s'}`
      )
      .then(({ data }) => {
        console.log(data);
        dispatch(peopleMovieActions.getPeopleDetails(data));
      });
  }, []);
  //  console.log(Object.values(people)[1])
  return (
    <section>
      <ul>
        {peoples &&
          peoples.map((p) => (
            <li key={p.id}>
              <p>{p.name}</p>
              <img
                alt=""
                src={`https://www.themoviedb.org/t/p/w235_and_h235_face/${p.profile_path}`}
              />
            </li>
          ))}
      </ul>
    </section>
  );
};
// & language=en - US & append_to_response=vika
