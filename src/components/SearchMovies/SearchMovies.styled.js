import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  justify-content: center;
  max-width: 400px;
  margin: 20px auto 0;
  border: 2px solid #3f3f40;
  border-radius: 8px;
  overflow: hidden;
`;

export const Input = styled.input`
  width: 100%;
  font-size: 16px;
  font-weight: 600;
  padding-left: 8px;
`;

export const Button = styled.button`
  color: #000000;
  background-color: #f0f0f0;

  font-size: 16px;
  font-weight: 600;

  padding: 8px;
  cursor: pointer;
  border: 0;
  outline: none;

  :hover {
    color: #ffffff;
    background-color: #3f3f40;
  }
`;
