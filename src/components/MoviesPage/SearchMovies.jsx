import { MoviesList } from 'components/MovieList/MovieList';
import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { fetchSearchMovies } from 'services/servicesApi';
import { Button, Form, Input } from './MoviesPage.styled';

export default function SearchMovies() {
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (!searchParams.get('query')) {
      return;
    }
    (async function fetchMovies() {
      const response = await fetchSearchMovies(searchParams);
      setMovies(response);
    })();
  }, [searchParams]);

  const handlChange = e => {
    setQuery(e.currentTarget.value);
  };

  const handlSubmit = e => {
    e.preventDefault();
    setSearchParams({ query });
    setQuery('');
  };

  return (
    <>
      <Form onSubmit={handlSubmit}>
        <Input type="text" value={query} onChange={handlChange}></Input>
        <Button type="submit">Search</Button>
      </Form>
      {movies && <MoviesList movies={movies} url={' '} location={location} />}
    </>
  );
}
