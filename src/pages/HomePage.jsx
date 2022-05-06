import { MoviesList } from 'components/MovieList/MovieList';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchFilms } from '../services/servicesApi';

export default function HomePage() {
  const [movies, setMovies] = useState(null);
  const location = useLocation();
  console.log(location);

  useEffect(() => {
    (async function fetchMovies() {
      const data = await fetchFilms();
      setMovies(data);
    })();
  }, []);

  return (
    <>
      <h2
        style={{
          padding: '20px 0 0 20px',
        }}
      >
        Trending today
      </h2>
      {movies && (
        <MoviesList movies={movies} url={'movies/'} location={location} />
      )}
    </>
  );
}
