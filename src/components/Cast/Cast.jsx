import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchActorList } from 'services/servicesApi';
import {
  Actor,
  ActorInfo,
  ActorsList,
  CastTitle,
  Foto,
  InfoTitle,
} from './Cast.styled';
import avatar from '../../images/no-avatar.jpeg';

export default function Cast() {
  const [actorsList, setActorsList] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    (async function fetchActors() {
      const response = await fetchActorList(movieId);
      setActorsList(response);
    })();
  }, [movieId]);

  return (
    <>
      <CastTitle>Actors</CastTitle>
      <ActorsList>
        {actorsList &&
          actorsList.map(actor => (
            <Actor key={actor.id}>
              <Foto
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/original${actor.profile_path}`
                    : avatar
                }
                alt={actor.name}
              />
              <ActorInfo>
                <InfoTitle>Name:</InfoTitle>
                <span>{actor.name}</span>
                <InfoTitle>Character:</InfoTitle>
                <span>{actor.character}</span>
              </ActorInfo>
            </Actor>
          ))}
      </ActorsList>
    </>
  );
}
