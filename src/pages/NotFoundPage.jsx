import { Link } from 'react-router-dom';

export default function NotFoundPage(params) {
  return (
    <p>
      Такой страницы не найдено вернитесь на <Link to="/">Home page</Link>
    </p>
  );
}
