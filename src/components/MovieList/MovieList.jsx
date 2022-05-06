import { Link } from 'react-router-dom';
import { MoviesItem, List } from './MovieList.styled';

export const MoviesList = ({ movies, url, location }) => {
  return (
    <List>
      {movies.map(({ id, title, poster_path }) => (
        <MoviesItem key={id}>
          {/* <Image
              src={`https://image.tmdb.org/t/p/original${poster_path}`}
              alt={title}
            /> */}
          <Link
            to={{
              pathname: `${url}${id}`,
              state: { from: location },
            }}
          >
            {title}
          </Link>
        </MoviesItem>
      ))}
    </List>
  );
};
