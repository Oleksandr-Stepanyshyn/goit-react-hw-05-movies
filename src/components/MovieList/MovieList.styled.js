import styled from 'styled-components';

export const List = styled.ul`
  /* display: flex; */
  /* flex-wrap: wrap; */

  padding: 24px;
`;

export const MoviesItem = styled.li`
  & + & {
    margin-top: 16px;
  }
`;

export const Image = styled.img`
  width: 300px;
`;
