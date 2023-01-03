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
          <TableHeaderLabel>Requested By</TableHeaderLabel>
        </TableCell>
        <TableCell>
          <TableHeaderLabel>Status</TableHeaderLabel>
        </TableCell>
        <TableCell>
          <TableHeaderLabel>Created At</TableHeaderLabel>
        </TableCell>
        <TableCell>
          <TableHeaderLabel>Actions</TableHeaderLabel>
        </TableCell>
      </TableRow>
    </TableHead>
  );
};

TableHeader.propTypes = {
  handleSort: PropTypes.func.isRequired,
};

export default TableHeader;
