import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import { SharedLayout } from './SharedLayout/SharedLayout';

// const createAsyncComponent = (path) => lazy(() => import(path));

// const Home = createAsyncComponent("../pages/Home/Home");
// const Movies = createAsyncComponent("../pages/Movies/Movies");
// const MovieDetails = createAsyncComponent("../pages/MovieDetails/MovieDetails");
// const Cast = createAsyncComponent("./Cast/Cast");
// const Reviews = createAsyncComponent("./Reviews/Reviews");
// const NotFound = createAsyncComponent("../pages/NotFound/NotFound");

const Home = lazy(() => import('../pages/Home/Home'))
const Movies = lazy(() => import('../pages/Movies/Movies'))
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'))
const Cast = lazy(() => import('../components/Cast/Cast'))
const Reviews = lazy(() => import('../components/Reviews/Reviews'))
const NotFound = lazy(() => import('../pages/NotFound/NotFound'))

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path='cast' element={<Cast />} />
          <Route path='reviews' element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
