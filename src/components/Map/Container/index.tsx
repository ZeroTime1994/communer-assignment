import { MapOptions } from 'leaflet';
import { MapContainer } from 'react-leaflet';
const Container: React.FC<MapOptions> = (props) => {
  return <MapContainer {...props}></MapContainer>;
};

export default Container;
