import HomePage from 'pages/HomePage';
import MoviesDetailsPage from 'pages/MovieDetailsPage';
import MoviesPage from 'pages/MoviesPage';
import NotFoundPage from 'pages/NotFoundPage';
import { Route, Routes } from 'react-router-dom';
import AppBar from './AppBar/AppBar';
import Cast from './Cast/Cast';
import { GlobalStyle } from './GlobalStyle';
import Reviews from './Reviews/Reviews';
import SearchMovies from './SearchMovies/SearchMovies';

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <AppBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />}>
          <Route index element={<SearchMovies />} />
          <Route path=":movieId" element={<MoviesDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};
