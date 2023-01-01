import React from 'react';
import PropTypes from 'prop-types';

import { ActionLabelWrapper as Wrapper } from './styles';

const ActionText = ({ label, ...props }) => (
  <Wrapper {...props}>{label && label}</Wrapper>
);

ActionText.propTypes = {
  label: PropTypes.string,
};

ActionText.defaultProps = {
  label: '',
};

export default ActionText;
