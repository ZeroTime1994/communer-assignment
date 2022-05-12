import styled from 'styled-components';
import uploadImage from '../../assets/icons/upload.png';
export const UploadZone = styled.div<{ image?: string }>`
  height: 120px !important;
  cursor: pointer;
  background: url(${(props) => props.image}) no-repeat center center / contain;
  background-color: #01b7ff18;
  flex: 1;
`;

UploadZone.defaultProps = {
  image: uploadImage,
};
