import React from 'react';
import PropTypes from 'prop-types';

import { formatDate } from 'Utils';

import { Wrap } from './styles';

const CellDateTime = ({ date, format, parseFormat }) => (
  <Wrap>{date ? formatDate(date, { format, parseFormat }) : 'N/A'}</Wrap>
);

CellDateTime.propTypes = {
  date: PropTypes.string,
  format: PropTypes.string,
  parseFormat: PropTypes.string,
};

CellDateTime.defaultProps = {
  format: 'DD/MM/YYYY',
  parseFormat: 'ddd MMM DD YYYY HH:mm:ss Z',
  date: null,
};

export default CellDateTime;
