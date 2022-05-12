import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const Header = styled.div`
  width: 100%;
  background-color: #01b7ff;
  color: white;
  padding: 0 20px;
  font-size: 0.4rem;
`;

export const Footer = styled.div`
  text-align: right;
`;

export const Content = styled.div`
  padding: 20px;
  .map-content {
    width: 75px;
    height: 75px;
  }
`;

export const MapContainerInput = styled.div`
  display: flex;
  margin-top: 0.8rem;

  & > span {
    width: 200px;
    font-size: 0.9rem;
  }
`;
export const MapContainer = styled.div`
  width: 100%;
  height: 150px;
`;
