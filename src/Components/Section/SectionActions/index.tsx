import React from 'react';

import { Wrapper } from './styles';

const SectionActions = ({
  children,
  displayFlex,
}: {
  children: React.ReactNode;
  displayFlex?: boolean;
}) => (
  <Wrapper className="section-actions" displayFlex={displayFlex}>
    {children}
  </Wrapper>
);

export default SectionActions;
