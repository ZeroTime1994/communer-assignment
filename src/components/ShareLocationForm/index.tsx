import { LatLngExpression } from 'leaflet';
import { useState } from 'react';
import { Button } from '../Button';
import FileInput from '../FileInput';
import Input from '../Input';
import Map from '../Map';
import Provider from '../Map/Provider';
import Select from '../Select';
import { Container, Content, Footer, Header, MapContainer, MapContainerInput } from './styles';

export interface SharedLocationFormProps {
  position?: LatLngExpression;
}
const SharedLocationForm: React.FC<SharedLocationFormProps> = ({ position }) => {
  const [formData, setFormData] = useState({
    name: '',
    locationType: 1,
  });

  const [logo, setLogo] = useState<{
    file: File;
    imageSrc: string;
  }>();

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

  return (
    <Container>
      <Header>
        <h1>Share location</h1>
      </Header>
      <Content>
        <div>
          <Input
            value={formData.name}
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
        <Footer>
          <Button>Cancel</Button>
          <Button primary>Share</Button>
        </Footer>
      </Content>
    </Container>
  );
};

export default SharedLocationForm;
