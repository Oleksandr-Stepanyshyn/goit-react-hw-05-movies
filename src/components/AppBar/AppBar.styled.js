import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  color: #c4c4c4;
  background-color: #3f3f40;
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 24px;
  padding: 24px 0;
`;

export const NavItem = styled.li`
  & + & {
    margin-left: 24px;
  }
`;

export const Link = styled(NavLink)`
  &.active {
    color: #fc813f;
  }
`;
