import { MoviesList, MoviesItem } from 'components/HomePage/HomePage.styled';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { API } from '../services/servicesApi';
import { fetchFilms } from '../services/servicesApi';

export default function HomePage() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    (async function fetchMovies() {
      const data = await fetchFilms();
      // const popularFilms = await data.results;
      // console.log(data);
      setMovies(data);
    })();
  }, []);

  // console.log(movies);

  return (
    <MoviesList>
      {movies &&
        movies.map(movie => (
          <MoviesItem key={movie.id}>
            {/* <Image
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt={movie.title}
            /> */}
            <Link to={`movies/${movie.id}`}>{movie.title}</Link>
          </MoviesItem>
        ))}
    </MoviesList>
  );
}
