import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styles';

const SectionContainer = ({ children, ...props }) => (
  <Wrapper {...props} className="section-container">
    {children}
  </Wrapper>
);

SectionContainer.propTypes = {
  col: PropTypes.number,
  displayBlock: PropTypes.bool,
};

SectionContainer.defaultProps = {
  col: 1,
  displayBlock: false,
};

export default SectionContainer;
