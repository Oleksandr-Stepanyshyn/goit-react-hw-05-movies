import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  padding: 24px;
`;

export const LinkMovie = styled(Link)`
  display: flex;
  flex-direction: column;
`;

export const MoviesItem = styled.li`
  flex-basis: calc((100% - 80px) / 4);
  margin: 10px;
`;

export const Image = styled.img`
  flex-grow: 1;
  /* width: 100%; */
  /* height: 100%; */
`;

export const Title = styled.h4``;
