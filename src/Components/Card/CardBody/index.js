import React from 'react';
import { Wrapper, StyledCardBody } from './styles';

const CardContent = ({ children }) => (
  <Wrapper>
    <StyledCardBody> {children} </StyledCardBody>
  </Wrapper>
);

export default CardContent;
