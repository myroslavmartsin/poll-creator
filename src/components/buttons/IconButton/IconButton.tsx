import styled from 'styled-components';

export const IconButton = styled.button`
  width: 34px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #27a98b;
  border-radius: 50%;
  color: #ffffff;

  &:hover {
    background: #227a66;
  }

  &:disabled {
    cursor: not-allowed;
    background: #f2eeee;
  }
`;
