//react
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { getPersonData, getPersonMovie } from '../../API/movieApi';
import { RootState } from '../../redux/store';
import { PersonMovie } from './PersonMovie';

export const PeopleDetails = () => {
  const personData = useSelector((s: RootState) => s.people.peopleDetails);

  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const makeStepBack = () => {
    navigate(-1);
  };
  useEffect(() => {
    getPersonData(id, dispatch);
    getPersonMovie(id, dispatch)
  }, [id]);
  return (
    <>
    <div className=" people__details">
      <div>
        <button onClick={makeStepBack}>Back</button>
        <h1>{personData.name}</h1>
        {personData.adult ? '18+' : ''}
        <img
          src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${personData.profile_path}`}
          alt=""
        />
      </div>

      <div className="wrap-2">
        <p className=" people__details-descr">{personData.biography}</p>
        <div>
          <div className=" people__details-birthday">
            Date of Birthday: {personData.birthday}
          </div>
          <div className=" people__details-born">
            {personData.place_of_birth}
          </div>
        </div>
        <div className=" people__details-popularity">
          Popularity:{' '}
          {personData.popularity &&
            personData.popularity.toLocaleString().slice(0, 4)}
          /100
        </div>
        <p>gender:{personData.gender}</p>
      </div>
      
      </div>
      <PersonMovie/>s
      </>
  );
};
