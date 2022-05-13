import { Marker as LeafletMarker } from 'react-leaflet';
import L, { LatLngExpression } from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

import { LocationInfo } from '../../../store/location/locationSlice';
import MarkerPopup from './MarkerPopup';

const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

const Marker: React.FC<{ position: LatLngExpression; info?: LocationInfo }> = ({
  position,
  info,
}) => {
  return position === null ? null : (
    <LeafletMarker position={position}>{info && <MarkerPopup info={info} />}</LeafletMarker>
  );
};

export default Marker;
