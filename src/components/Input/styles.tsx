import styled from 'styled-components';

export const Label = styled.label`
  width: 100%;
  font-size: 0.9rem;
  display: flex;
  margin: 0.5rem 0;
  & > span {
    flex: 1;
  }
  & > div,
  & > input,
  & > select {
    margin-left: 1rem;
    flex: 38%;
    height: 30px;
    border-radius: 5px;
    width: 100%;
  }
`;
