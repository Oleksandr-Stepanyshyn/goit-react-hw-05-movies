import {
  Image,
  MovieCard,
  DetailsInfo,
  Text,
  Genre,
  Information,
  InformationList,
  InformationItem,
  GoBackButton,
  ArrowLeft,
} from 'components/MovieDetailsPage/MovieDetailsPage.styled';
import { useEffect, useState } from 'react';
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import { fetchDetailsFilm } from 'services/servicesApi';

export default function MoviesDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    (async function datailsFilm() {
      try {
        const data = await fetchDetailsFilm(movieId);
        setMovie(data);
      } catch (error) {
        navigate('/');
      }
    })();
  }, [movieId, navigate]);

  function goBack() {
    navigate(location?.state?.from ?? '/');
  }

  return (
    <>
      <GoBackButton type="button" onClick={goBack}>
        <ArrowLeft />
        Go back
      </GoBackButton>
      {movie && (
        <MovieCard>
          <Image
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
                : 'https://cdn.pixabay.com/photo/2014/03/25/16/27/movie-297135_960_720.png'
            }
            alt={movie.title}
          />
          <DetailsInfo>
            <h2>
              {movie.title ?? movie.name}
              <span>({Number.parseInt(movie.release_date)})</span>
            </h2>
            <Text>Rating: {movie.vote_average}</Text>
            <h3>Owerview</h3>
            <Text>{movie.overview}</Text>
            <h4>Genres</h4>
            <Text>
              {movie.genres.map(({ id, name }) => (
                <Genre key={id}>{name}</Genre>
              ))}
            </Text>
          </DetailsInfo>
        </MovieCard>
      )}
      <hr />
      <Information>
        <p>Additional information</p>
        <InformationList>
          <InformationItem>
            <Link to="cast">Cast</Link>
          </InformationItem>
          <InformationItem>
            <Link to="reviews">Reviews</Link>
          </InformationItem>
        </InformationList>
      </Information>
      <hr />
      <Outlet />
    </>
  );
}
