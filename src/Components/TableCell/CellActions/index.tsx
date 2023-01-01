import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from './styles';

const CellActions = ({
  children,
  ...props
}: {
  children: React.ReactNode;
  justify?: string;
}): JSX.Element => <Wrapper {...props}>{children}</Wrapper>;

CellActions.propTypes = {
  children: PropTypes.node,
};

export default CellActions;
