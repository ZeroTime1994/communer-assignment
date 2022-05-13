import { Button } from '../Button';
import { Container, Content, Footer, Header, MapContainer, MapContainerInput } from './styles';
import { LatLngLiteral } from 'leaflet';
import { setNewSharedLocation } from '../../store/location/locationSlice';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

import FileInput from '../FileInput';
import Input from '../Input';
import Map from '../Map';
import Provider from '../Map/Provider';
import Select from '../Select';

export interface SharedLocationFormProps {
  position?: LatLngLiteral;
  onClose?: () => void;
}
const SharedLocationForm: React.FC<SharedLocationFormProps> = ({ position, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    locationType: '1',
  });

  const [logo, setLogo] = useState<{
    file: File;
    imageSrc: string;
  }>();

  const [errorMessage, setErrorMessage] = useState<string>();
  const onChangeInputs = (value: string | number, type: 'name' | 'locationType') => {
    setFormData((prevState) => ({ ...prevState, [type]: value }));
  };

  const changeFileHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files?.length) {
      setLogo({
        file: event.target.files[0],
        imageSrc: URL.createObjectURL(event.target.files[0]),
      });
    }
  };

  const dispatch = useDispatch();

  const submitLocation = () => {
    if (!position) {
      setErrorMessage('Please select a location on the map');
      return;
    }
    if (!formData.name.trim()) {
      setErrorMessage('please enter a name');
      return;
    }
    if (!formData.locationType) {
      setErrorMessage('please select location type');
      return;
    }
    if (!logo?.file) {
      setErrorMessage('please choose a logo');
      return;
    }

    dispatch(
      setNewSharedLocation({
        LatLng: position,
        locationType: formData.locationType,
        logo: logo.file,
        name: formData.name,
      })
    );
    onClose?.();
  };
  return (
    <Container>
      <Header>
        <h1>Share location</h1>
      </Header>
      <Content>
        <div>
          <Input
            value={formData.name}
            required
            onChange={(e) => onChangeInputs(e.target.value, 'name')}
            label="Location name"
            inputId="locationName"
            type="text"
          />
          <MapContainerInput>
            <span> Location on map: </span>
            <MapContainer>
              <Provider>
                <Map zoom={16} selectedLocation={position} position={position} />
              </Provider>
            </MapContainer>
          </MapContainerInput>

          <Select
            value={formData.locationType}
            onChange={(e) => onChangeInputs(e.target.value, 'locationType')}
            label="Location type"
            options={[
              {
                text: 'Business',
                value: 1,
              },
              {
                text: 'Home',
                value: 2,
              },
              {
                text: 'Other',
                value: 3,
              },
            ]}
          />
          <FileInput src={logo?.imageSrc} onChange={changeFileHandler} label="Logo" />
        </div>
        <div style={{ color: 'red' }}>{errorMessage && <p>{errorMessage}</p>}</div>
        <Footer>
          <Button onClick={onClose}>Cancel</Button>
          <Button onClick={submitLocation} primary>
            Share
          </Button>
        </Footer>
      </Content>
    </Container>
  );
};

export default SharedLocationForm;
