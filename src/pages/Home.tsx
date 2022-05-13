import { LatLngLiteral, LeafletMouseEvent } from 'leaflet';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Dialog from '../components/Dialog';
import Map from '../components/Map';
import MapProvider from '../components/Map/Provider';
import SharedLocationForm from '../components/ShareLocationForm';
import { RootState } from '../store';

const position = {
  lat: 35.68855063531451,
  lng: 51.389858722686775,
};

const Home = () => {
  // States
  const [selectedLocation, setSelectedLocation] = useState<LatLngLiteral>();
  const [showDialogForm, setShowDialogForm] = useState(false);
  // Callbacks
  const mapClickHandler = (e: LeafletMouseEvent) => {
    setSelectedLocation(e.latlng);
    setShowDialogForm(true);
  };

  const sharedLocations = useSelector((state: RootState) => state.location.sharedLocations);

  return (
    <>
      <div
        style={{
          width: '100vw',
          height: '100vh',
        }}
      >
        <MapProvider>
          <Map sharedLocations={sharedLocations} position={position} onClick={mapClickHandler} />
        </MapProvider>
      </div>
      {showDialogForm && (
        <Dialog>
          <SharedLocationForm
            onClose={() => setShowDialogForm(false)}
            position={selectedLocation}
          />
        </Dialog>
      )}
    </>
  );
};

export default Home;
