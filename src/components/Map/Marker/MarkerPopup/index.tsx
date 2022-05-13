import { Container, Content, Header } from './styles';
import { LocationInfo } from '../../../../store/location/locationSlice';
import { Popup } from 'react-leaflet';
import { useMemo } from 'react';

const MarkerPopup: React.FC<{
  info: LocationInfo;
}> = ({ info }) => {
  const imageUrl = useMemo(() => {
    if (!info.logo) return;
    return URL.createObjectURL(info.logo);
  }, [info.logo]);

  const translationType = () => {
    switch (info.locationType) {
      case '1':
        return 'Business';
      case '2':
        return 'Home';
      case '3':
        return 'other';
    }
  };

  return (
    <Popup className="popup-container">
      <Container>
        <Header>
          <h1>Locations Details</h1>
        </Header>
        <Content>
          <div>name: {info.name}</div>
          <div>locationType: {translationType()}</div>
          <div>
            <img height={100} src={imageUrl} />
          </div>
        </Content>
      </Container>
    </Popup>
  );
};

export default MarkerPopup;
