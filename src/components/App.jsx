import { Routes, Route } from "react-router-dom";
import { Home } from '../pages/Home/Home';
import { Movies } from '../pages/Movies/Movies';
import { NotFound } from '../pages/NotFound/NotFound';
import { SharedLayout } from './SharedLayout/SharedLayout';


export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
