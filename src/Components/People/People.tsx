import { ChangeEvent, FormEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getPeople } from '../../API/movieApi';

import { RootState } from '../../redux/store';
import './people.scss';
const People = () => {
  const [query, setQuery] = useState('');
  const { peoples } = useSelector((s: RootState) => s.people);

  const dispatch = useDispatch();

  const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getPeople(query, dispatch);
  };
  const getInputValue = (e: ChangeEvent<HTMLInputElement>) => {

    setQuery(e.target.value);
  };

  return (
    <div className="container">
      <div className="container__item">
        <form className="form" onSubmit={handleSubmitForm}>
          <input
            onChange={getInputValue}
            type="text"
            className="form__field"
            placeholder="Find movie"
          />
          <button
            type="submit"
            className="btn btn--primary btn--inside uppercase"
          >
            Find
          </button>
        </form>
      </div>

      <ul className="people__list">
        {peoples.length > 0
          ? peoples.map(({id, name, profile_path}) => (
              <div key={id}>
                {name.length < 3 ? null : (
                  <li className="people__list-item" key={id}>
                    <NavLink to={`/actors/${id}`}>
                      <p className="people__list-text">{name}</p>
                    
                    <img
                      width={250}
                      height={250}
                          alt=""
                        src={profile_path ?
                          `https://www.themoviedb.org/t/p/w235_and_h235_face/${profile_path}`
                         : "https://t3.ftcdn.net/jpg/02/43/51/48/360_F_243514868_XDIMJHNNJYKLRST05XnnTj0MBpC4hdT5.jpg"}
                        />
     
                    </NavLink>
                  </li>
                )}
              </div>
            ))
          : "Sorry, but actor with such name doesn't exist!"}
      </ul>
    </div>
  );
};

export default People;
