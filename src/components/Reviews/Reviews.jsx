import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'services/servicesApi';
import {
  ReviewsList,
  ReviewsItem,
  ReviewsText,
  ReviewsTitle,
  AuthorName,
  ErrorReview,
} from './Reviews.styled';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    (async function fetchReviewsList() {
      const response = await fetchReviews(movieId);
      setReviews(response);
    })();
  }, [movieId]);

  const showReviews = Boolean(reviews.length);

  return (
    <>
      <ReviewsTitle>Reviews</ReviewsTitle>

      {showReviews ? (
        <ReviewsList>
          {reviews.map(({ id, author, content }) => (
            <ReviewsItem key={id}>
              <h4>
                Author:<AuthorName>{author}</AuthorName>
              </h4>
              <ReviewsText>{content}</ReviewsText>
            </ReviewsItem>
          ))}
        </ReviewsList>
      ) : (
        <ErrorReview>We don't have any reviews for this movie.</ErrorReview>
      )}
    </>
  );
}
