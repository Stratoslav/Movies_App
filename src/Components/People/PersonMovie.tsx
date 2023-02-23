import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { RootState } from '../../redux/store';
import './people.scss'
export const PersonMovie = () => {
  const movies = useSelector((s: RootState) => s.people.movies);
  let crew = movies.cast ? [...movies.cast] : [];

  const sortMoviesByAverage = crew.sort(
    (a, b) => b.vote_average - a.vote_average
  );

  return (
    <div>
      <h2 className="person__movie-title">Movies</h2>
      <div className="person__movie-list">
        {sortMoviesByAverage.map((m) => (
          <div key={m.id}>
            {m && m.vote_average !== 0 ? (
              <div className="person__movie-item">
                <NavLink to={`movies/${m.id}`}>
                  <img
                    className="person__movie-img"
                    alt=""
                    src={
                      m.poster_path
                        ? `https://www.themoviedb.org/t/p/w150_and_h225_bestv2/${m.poster_path}`
                        : 'https://img.myloview.fr/images/questionnaire-question-mark-sign-query-symbol-asking-man-scholar-pupil-student-thinking-icon-blue-3d-rendering-400-245310281.jpg'
                    }
                  />
                  <h3>{m.original_title}</h3>
                  <p>Average: {m.vote_average.toString().slice(0,3)}</p>
                </NavLink>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};
// overflow-block
