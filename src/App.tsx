//react
import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
//lib
import { Loyaut } from './Components/Loyaut/Loyaut';
//components
import routes from './routes';
import { Actors } from './Components/Movies/Actors/Actors';
import { People } from './Components/People/People';
import { PeopleDetails } from './Components/People/PeopleDetails';
const HomePage = lazy(() => import('./Components/Movies/HomePage/HomePage'));
const MoviesPage = lazy(
  () => import('./Components/Movies/MoviesPage/MoviesPage')
);
const MovieDetails = lazy(
  () => import('./Components/Movies/MovieDetails/MovieDetails')
);
const Reviews = lazy(() => import('./Components/Movies/Review/Reviews'));
const Cast = lazy(() => import('./Components/Movies/Cast/Cast'));

const App = () => (
  <>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path={routes.home} element={<Loyaut />}>
          <Route index element={<HomePage />} />
          <Route path={routes.moviesPage} element={<MovieDetails />}>
            <Route path={routes.movieReview} element={<Reviews />} />
            <Route path={routes.movieCredits} element={<Cast />} />
          </Route>
          <Route path="/movies" element={<MoviesPage />}></Route>
          <Route index path={routes.actors} element={<Actors />} />
          <Route index path="/actors" element={<People />} />
          <Route index path="/actors/:id" element={<PeopleDetails />} />
        </Route>
      </Routes>
    </Suspense>
  </>
);

export default App;
