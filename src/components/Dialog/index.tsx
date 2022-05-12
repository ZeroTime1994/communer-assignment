import { Container, Content } from './styles';

const Dialog: React.FC = ({ children }) => {
  return (
    <Container>
      <Content>{children}</Content>
    </Container>
  );
};

export default Dialog;
