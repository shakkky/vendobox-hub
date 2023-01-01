import React from 'react';

import { Wrapper } from './styles';

const SectionFilter = ({ children, ...props }) => (
  <Wrapper {...props} className="section-filter">
    {children}
  </Wrapper>
);

export default SectionFilter;
