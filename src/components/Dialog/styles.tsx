import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1072;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Content = styled.div`
  z-index: 1073;
  width: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
`;
