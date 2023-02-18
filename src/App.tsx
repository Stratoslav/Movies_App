import { Route, Routes } from 'react-router-dom';
import { Loyaut } from './Components/Loyaut/Loyaut';
import { Children, lazy, Suspense } from 'react';
import routes from './routes';
import { Actors } from './Components/Movies/Actors/Actors';
import { ActorTypes } from './types';

const HomePage = lazy(() => import('./Components/Movies/HomePage/HomePage'));
const MoviesPage = lazy(() => import('./Components/Movies/MoviesPage/MoviesPage'));
const MovieDetails = lazy(() => import('./Components/Movies/MovieDetails/MovieDetails'));
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
        </Route>
      </Routes>
    </Suspense>
  </>
);

export default App;
