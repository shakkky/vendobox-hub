import styled from 'styled-components';
import Modal from 'Components/Modal';

const PdfModal = styled(Modal)`
  max-width: 70vw;
  width: fit-content;
`;

const PdfFrame = styled.div`
  max-height: 65vh;
  padding: 10px;
  overflow: scroll;
  /* stylelint-disable-next-line selector-type-no-unknown */
  page {
    border: 1px solid black;
    margin-right: 5px;
  }
`;

export { PdfModal, PdfFrame };
