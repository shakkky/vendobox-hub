import React from 'react';
import PropTypes from 'prop-types';

import {
  TableRow,
  TableHeaderLabel,
  TableCell,
  TableHead,
} from 'Components/Table';

const TableHeader = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell>
          <TableHeaderLabel>Customer</TableHeaderLabel>
        </TableCell>
        <TableCell>
          <TableHeaderLabel>Company</TableHeaderLabel>
        </TableCell>
        <TableCell>
          <TableHeaderLabel>Machine type</TableHeaderLabel>
        </TableCell>
      </TableRow>
    </TableHead>
  );
};

TableHeader.propTypes = {
  handleSort: PropTypes.func.isRequired,
};

export default TableHeader;
