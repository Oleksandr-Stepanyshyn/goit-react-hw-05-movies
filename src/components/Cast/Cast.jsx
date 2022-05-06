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
          actorsList.map(({ id, profile_path, name, character }) => (
            <Actor key={id}>
              <Foto
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/original${profile_path}`
                    : avatar
                }
                alt={name}
              />
              <ActorInfo>
                <InfoTitle>Name:</InfoTitle>
                <span>{name}</span>
                <InfoTitle>Character:</InfoTitle>
                <span>{character}</span>
              </ActorInfo>
            </Actor>
          ))}
      </ActorsList>
    </>
  );
}
