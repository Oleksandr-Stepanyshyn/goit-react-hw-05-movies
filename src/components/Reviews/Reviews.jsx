import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'services/servicesApi';
import {
  ReviewsList,
  ReviewsItem,
  ReviewsText,
  ReviewsTitle,
  Author,
  ErrorReview,
} from './Reviews.styled';

export default function Reviews() {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    (async function fetchReviewsList() {
      const response = await fetchReviews(movieId);
      setReviews(response);
    })();
  }, [movieId]);

  console.log(reviews);

  return (
    <>
      <ReviewsTitle>Reviews</ReviewsTitle>
      <ReviewsList>
        {reviews &&
          reviews.map(review => (
            <ReviewsItem key={review.id}>
              <h4>
                Author:<Author>{review.author}</Author>
              </h4>
              <ReviewsText>{review.content}</ReviewsText>
            </ReviewsItem>
          ))}
      </ReviewsList>
      {reviews && (
        <ErrorReview>We don't have any reviews for this mivie</ErrorReview>
      )}
    </>
  );
}
