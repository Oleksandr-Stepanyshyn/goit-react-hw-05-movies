import styled from 'styled-components';
import { HiOutlineArrowLeft } from 'react-icons/hi';

export const GoBackButton = styled.button`
  display: flex;
  align-items: center;
  color: #ffffff;
  background-color: #3f3f40;
  padding: 8px;
  margin-top: 20px;
  margin-left: 20px;
  border-radius: 8px;
  cursor: pointer;

  :hover,
  :focus {
    color: #000000;
    background-color: #f0f0f0;
  }
`;

export const ArrowLeft = styled(HiOutlineArrowLeft)`
  margin-right: 8px;
`;

export const MovieCard = styled.div`
  display: flex;
  padding: 20px;
`;

export const Image = styled.img`
  width: 360px;
`;

export const DetailsInfo = styled.div`
  margin-left: 20px;

  & .p {
    margin: 20px, 0;
  }
`;

export const Text = styled.p`
  margin: 20px 0;
`;

export const Genre = styled.span`
  & + & {
    margin-left: 12px;
  }
`;

export const Information = styled.div`
  padding: 20px;
`;

export const InformationList = styled.ul`
  padding-top: 20px;
  padding-left: 40px;
`;

export const InformationItem = styled.ul`
  color: blue;
  text-decoration: underline;
  list-style: inside;
  & + & {
    padding-top: 12px;
  }
`;
