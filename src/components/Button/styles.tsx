import styled from 'styled-components';

export const Button = styled.button<{ primary?: boolean }>`
  background: ${(props) => (props.primary ? '#01b7ff' : '#9b9b9b')};
  color: #ffff;
  font-size: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  border: none;
  margin-left: 1rem;
`;
Button.defaultProps = {
  primary: false,
};
