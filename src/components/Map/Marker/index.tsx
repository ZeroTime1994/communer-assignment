import { LatLngExpression } from 'leaflet';
import L from 'leaflet';
import { Marker as LeafletMarker, Popup } from 'react-leaflet';

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import MarkerPopup from './MarkerPopup';
import { LocationInfo } from '../../../store/location/locationSlice';

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
