import React from 'react';

import { Wrapper, Label, ImageLoader } from './styles';
import loader from './assets/loader.gif';

const PageLoader = ({ label }: { label?: string }) => (
  <Wrapper>
    <ImageLoader src={loader} alt="&nbsp;Loading page..." />
    {label && <Label>{label}</Label>}
  </Wrapper>
);

export default PageLoader;
