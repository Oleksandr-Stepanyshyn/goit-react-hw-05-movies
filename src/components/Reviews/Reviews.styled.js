import styled from 'styled-components';

export const ReviewsTitle = styled.h3`
  padding: 20px;
`;

export const ReviewsList = styled.ul`
  padding: 0 0 20px 20px;
`;

export const ReviewsItem = styled.li`
  & + & {
    margin-top: 16px;
  }
`;

export const ReviewsText = styled.p`
  margin-top: 12px;
`;

export const AuthorName = styled.span`
  margin-left: 8px;
  font-weight: 500;
`;

export const ErrorReview = styled.p`
  padding: 0 0 20px 20px;
`;
