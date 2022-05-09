import { MoviesItem, List, Image, Title, LinkMovie } from './MovieList.styled';

export const MoviesList = ({ movies, location }) => {
  return (
    <List>
      {movies.map(({ id, title, name, poster_path }) => (
        <MoviesItem key={id}>
          <LinkMovie to={`/movies/${id}`} state={{ from: location }}>
            <Image
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/original/${poster_path}`
                  : 'https://cdn.pixabay.com/photo/2014/03/25/16/27/movie-297135_960_720.png'
              }
              alt={title ?? name}
            />
            <Title>{title ?? name}</Title>
          </LinkMovie>
        </MoviesItem>
      ))}
    </List>
  );
};
