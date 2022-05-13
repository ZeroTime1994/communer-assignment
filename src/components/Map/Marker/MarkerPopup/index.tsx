import { useMemo } from 'react';
import { Popup } from 'react-leaflet';
import { LocationInfo } from '../../../../store/location/locationSlice';
import { Button } from '../../../Button';
import { Container, Content, Footer, Header } from './styles';

const MarkerPopup: React.FC<{
  info: LocationInfo;
}> = ({ info }) => {
  const imageUrl = useMemo(() => {
    if (!info.logo) return;
    return URL.createObjectURL(info.logo);
  }, [info.logo]);

  return (
    <Popup>
      <Container>
        <Header>
          <h1>Locations Details</h1>
        </Header>
        <Content>
          <div>name: {info.name}</div>
          <div>locationType: {info.locationType}</div>
          <div>
            <img height={100} src={imageUrl} />
          </div>
          <Footer>
            <Button>Close</Button>
            <Button primary>Edit</Button>
          </Footer>
        </Content>
      </Container>
    </Popup>
  );
};

export default MarkerPopup;
