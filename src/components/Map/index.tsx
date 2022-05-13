import { LatLngExpression, LeafletMouseEvent } from 'leaflet';
import { TileLayer, useMapEvents } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
import { useCallback, useEffect } from 'react';
import Marker from './Marker';
import { LocationInfo } from '../../store/location/locationSlice';

export interface MapProps {
  onClick?: (e: LeafletMouseEvent) => void;
  selectedLocation?: LatLngExpression;
  sharedLocations?: LocationInfo[];
  position?: LatLngExpression;
  zoom?: number;
}
const Map: React.FC<MapProps> = ({
  onClick,
  position,
  selectedLocation,
  sharedLocations,
  zoom,
}) => {
  // Hooks
  const mapEvent = useMapEvents({
    click: onClick,
    locationfound(e) {
      console.log(e);
    },
  });

  //  Callbacks
  const setPosition = useCallback(() => {
    {
      if (position) {
        mapEvent.setView(position, zoom);
      }
    }
  }, [mapEvent, position, zoom]);

  // Effects
  useEffect(() => {
    setPosition();
  }, [position, setPosition]);

  return (
    <>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {selectedLocation && <Marker position={selectedLocation} />}
      {sharedLocations &&
        sharedLocations.length > 0 &&
        sharedLocations.map((location, index) => (
          <Marker key={index} position={location.LatLng} info={location} />
        ))}
    </>
  );
};

Map.defaultProps = {
  zoom: 13,
};
export default Map;
