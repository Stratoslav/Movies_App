import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import { RootState } from "../../redux/store"

export const PersonMovie = () => {
    const movies = useSelector((s: RootState) => s.people.movies)
    let crew = movies.cast ? [...movies.cast] : []
    
 const sortMoviesByAverage = crew.sort((a, b) => b.vote_average - a.vote_average)
//   console.log(sortMoviesByAverage)
    return (
        <div>
            <h2>Movies</h2>
            <ul className="person__movie-list">{sortMoviesByAverage.map(m => (
            <>
                { m && m.vote_average !== 0 ?
            
                         ( <li className="person__movie-item">
                       <NavLink to={`movies/${m.id}`}>
                        
                    <img src={m.poster_path ? `https://www.themoviedb.org/t/p/w150_and_h225_bestv2/${m.poster_path}`: 'https://img.myloview.fr/images/questionnaire-question-mark-sign-query-symbol-asking-man-scholar-pupil-student-thinking-icon-blue-3d-rendering-400-245310281.jpg'} />
                  <h3>{m.original_title}</h3>
                            <p>Average: {m.vote_average}</p>
                 
                   
               </NavLink>
                </li>) : undefined}    
             
                      
                </>
            ))}</ul>
    </div>  
)
}
// overflow-block