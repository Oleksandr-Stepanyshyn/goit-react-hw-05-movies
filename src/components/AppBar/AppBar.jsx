import { Header, Link, NavItem, NavList } from './AppBar.styled';

export default function AppBar() {
  return (
    <Header>
      <nav>
        <NavList>
          <NavItem>
            <Link to="/">Home</Link>
          </NavItem>
          <NavItem>
            <Link to="movies">Movies</Link>
          </NavItem>
        </NavList>
      </nav>
    </Header>
  );
}
