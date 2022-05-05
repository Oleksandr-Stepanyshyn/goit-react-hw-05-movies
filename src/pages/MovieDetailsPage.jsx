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
import { Link, Outlet, useNavigate, useParams } from 'react-router-dom';
import { fetchDetailsFilm } from 'services/servicesApi';

export default function MoviesDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    (async function datailsFilm() {
      const data = await fetchDetailsFilm(movieId);
      setMovie(data);
    })();
  }, [movieId]);

  return (
    <>
      <GoBackButton type="button" onClick={() => navigate('/')}>
        <ArrowLeft />
        Go back
      </GoBackButton>
      {movie && (
        <MovieCard>
          <Image
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt={movie.title}
          />
          <DetailsInfo>
            <h2>
              {movie.title}
              <span>({Number.parseInt(movie.release_date)})</span>
            </h2>
            <Text>{movie.vote_average}</Text>
            <h3>Owerview</h3>
            <Text>{movie.overview}</Text>
            <h4>Genres</h4>
            <Text>
              {movie.genres.map(genre => (
                <Genre key={genre.id}>{genre.name}</Genre>
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
