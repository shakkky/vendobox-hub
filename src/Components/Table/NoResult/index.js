import React from 'react';
import PropTypes from 'prop-types';

const NoResult = ({ cols }) => (
  <tr>
    <td colSpan={cols}>No results found</td>
  </tr>
);

NoResult.propTypes = {
  cols: PropTypes.number.isRequired,
};

export default NoResult;
