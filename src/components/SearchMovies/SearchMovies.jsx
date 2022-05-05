import { useState } from 'react';

export default function SearchMovies() {
  const [query, setQuery] = useState('');

  const handlChange = e => {
    console.log(e.currentTarget.value);
    setQuery(e.currentTarget.value);
  };
  const handlSubmit = e => {};
  return (
    <form onSubmit={handlSubmit}>
      <input type="text" value={query} onChange={handlChange} />
      <button type="submit">Search</button>
    </form>
  );
}
