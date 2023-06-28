//react
import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
//components
import routes from './routes';
const HomePage = lazy(() => import('./Components/Movies/HomePage/HomePage'));
const MoviesPage = lazy(
  () => import('./Components/Movies/MoviesPage/MoviesPage')
);
const MovieDetails = lazy(
  () => import('./Components/Movies/MovieDetails/MovieDetails')
);
const Reviews = lazy(() => import('./Components/Movies/Review/Reviews'));
const Cast = lazy(() => import('./Components/Movies/Cast/Cast'));
const Actors = lazy(() => import('./Components/Movies/Actors/Actors'));
const People = lazy(() => import('./Components/People/People'));
const PeopleDetails = lazy(() => import('./Components/People/PeopleDetails'));
const Layout = lazy(() => import('./Components/Loyaut/Layout'));

const App = () => (
  <>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path={routes.moviesPage} element={<MovieDetails />}>
            <Route path={routes.movieReview} element={<Reviews />} />
            <Route path={routes.movieCredits} element={<Cast />} />
          </Route>
          <Route path="/movies" element={<MoviesPage />}></Route>
          <Route index path={routes.actors} element={<Actors />} />
          <Route index path={routes.people} element={<People />} />
          <Route index path={routes.actor} element={<PeopleDetails />} />
        </Route>
      </Routes>
    </Suspense>
  </>
);

export default App;
