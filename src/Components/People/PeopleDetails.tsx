//react
import {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { getPersonData } from '../../API/movieApi';
import { RootState } from '../../redux/store';

export const PeopleDetails = () => {
   const personData = useSelector((s: RootState) => s.people.peopleDetails);
// console.log(personData)
    const dispatch = useDispatch()
      const { id } = useParams()
    const navigate = useNavigate();
  const makeStepBack = () => {
    navigate(-1);
  };
 useEffect(() => {
   getPersonData(id, dispatch)
 }, [id])
  return (
    <>
          <button onClick={makeStepBack}>Back</button>
      <h1>{personData.name}</h1>
      {personData.adult ? '18+' : ''}
      <img
        src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${personData.profile_path}`}
        alt=""
      />

      <p>{personData.biography}</p>
      <div>
        <span>Date of Birthday: {personData.birthday}</span>
        <span>{personData.place_of_birth}</span>
      </div>
      <div>
        Popularity:{' '}
        {personData.popularity && personData.popularity.toLocaleString().slice(0, 4)}/100
      </div>
      <p>gender:{personData.gender}</p>
    </>
  );
};
