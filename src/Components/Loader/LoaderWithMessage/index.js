import { Indicator } from 'Components';
import { LoaderMessage } from './styles';

function LoaderWithMessage({ size, message }) {
  return (
    <>
      <Indicator size={size} />
      <LoaderMessage>{message}</LoaderMessage>
    </>
  );
}

export default LoaderWithMessage;
