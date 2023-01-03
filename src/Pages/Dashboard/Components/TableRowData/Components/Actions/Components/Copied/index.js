import { Container, Copied as CopiedBody } from './styles';

const Copied = ({ children }) => {
  return (
    <Container>
      <CopiedBody>{children}</CopiedBody>
    </Container>
  );
};

export default Copied;
