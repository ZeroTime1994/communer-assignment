import { LatLng, LatLngExpression } from 'leaflet';
import L from 'leaflet';
import { Marker as LeafletMarker, Popup, useMapEvents } from 'react-leaflet';

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import { useState } from 'react';

const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

const Marker: React.FC<{ position: LatLngExpression }> = ({ position }) => {
  return position === null ? null : (
    <LeafletMarker position={position}>
      <Popup>You are here</Popup>
    </LeafletMarker>
  );
};

export default Marker;
