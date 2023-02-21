import axios from 'axios';
import React, { FormEvent, ChangeEvent,useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import { getPersonData } from '../../API/movieApi';
import { peopleMovieActions } from '../../redux/peopleSlice';
import { RootState } from '../../redux/store';
import { PeopleTypes } from '../../types/peopleType';
import { apiKey } from '../ApiKey';
import './people.scss'
export const People = () => {
   const [query, setQuery] = useState('')
  const { peoples } = useSelector((s: RootState) => s.people);
 
  const dispatch = useDispatch();
  // const { id } = useParams();

  const handleSubmitForm = (e: any ) => {
    e.preventDefault()
    getPeople(query)

  }
  const getInputValue = (e:any) => {
  console.log(e.target.value)
    setQuery(e.target.value)
}
  const getPeople = (query: string) => {
    axios
      .get(
        `

https://api.themoviedb.org/3/search/person?api_key=${apiKey}&query=${query}`
      )
      .then(({ data }) => {

        dispatch(peopleMovieActions.getPeopleDetails(data));
      });
  };
 
  return (
    <section>

	<div className="container__item">
		<form className="form"  onSubmit={handleSubmitForm}>
			<input onChange={getInputValue} type="text" className="form__field" placeholder="Your E-Mail Address" />
			<button type="submit" className="btn btn--primary btn--inside uppercase">Send</button>
		</form>
	</div>

       
    
      <ul>
        {peoples &&
          peoples.map((p) => (
            <li key={p.id}>
              <NavLink to={`/actors/${p.id}`}>
              <p>{p.name}</p>
              <img
                alt=""
                src={`https://www.themoviedb.org/t/p/w235_and_h235_face/${p.profile_path}`}
                />
                </NavLink>
            </li>
          ))}
      </ul>
    </section>
  );
};
// & language=en - US & append_to_response=vika
