import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getPeople } from '../../API/movieApi';

import { RootState } from '../../redux/store';
import './people.scss';
const People = () => {
  const [query, setQuery] = useState('');
  const { peoples } = useSelector((s: RootState) => s.people);

  const dispatch = useDispatch();

  const handleSubmitForm = (e: any) => {
    e.preventDefault();
    getPeople(query, dispatch);
  };
  const getInputValue = (e: any) => {
    console.log(e.target.value);
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
          ? peoples.map((p) => (
              <div key={p.id}>
                {p.name.length < 3 ? null : (
                  <li className="people__list-item" key={p.id}>
                    <NavLink to={`/actors/${p.id}`}>
                      <p className="people__list-text">{p.name}</p>
                      {p.profile_path ? (
                        <img
                          alt=""
                          src={`https://www.themoviedb.org/t/p/w235_and_h235_face/${p.profile_path}`}
                        />
                      ) : (
                        <img
                          width={235}
                          height={235}
                          src="https://t3.ftcdn.net/jpg/02/43/51/48/360_F_243514868_XDIMJHNNJYKLRST05XnnTj0MBpC4hdT5.jpg"
                          alt=""
                        />
                      )}
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
