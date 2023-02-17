import { Route, Routes } from "react-router-dom";
import { Loyaut } from "./Components/Loyaut/Loyaut";
import { lazy, Suspense } from "react";
import routes from "./routes";

const HomePage = lazy(() => import("./Components/Movies/HomePage/HomePage"));
const MoviesPage = lazy(() => import("./Components/Movies/MoviesPage"));
const MovieDetails = lazy(() => import("./Components/Movies/MovieDetails"));
const Reviews = lazy(() => import("./Components/Movies/Reviews"));
const Cast = lazy(() => import("./Components/Movies/Cast"));

const apiKey = "be91785ae562dae75d4f006499f353c9";

const App = () => (
  <>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path={routes.home} element={<Loyaut />}>
          <Route index element={<HomePage apiKey={apiKey} />} />
          <Route path={routes.moviesPage} element={<MovieDetails />}>
            <Route path={routes.movieReview} element={<Reviews />} />
            <Route path={routes.movieCredits} element={<Cast />} />
          </Route>
          <Route
            path="/movies"
            element={<MoviesPage apiKey={apiKey} />}
          ></Route>
        </Route>
      </Routes>
    </Suspense>
  </>
);

export default App;
