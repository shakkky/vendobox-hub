import React from 'react';
import { ModalBody } from 'reactstrap';

import { Wrapper } from './styles';

const ModalContent = ({ children }) => (
  <Wrapper>
    <ModalBody> {children} </ModalBody>
  </Wrapper>
);

export default ModalContent;
