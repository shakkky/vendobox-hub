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
          <TableHeaderLabel>Created</TableHeaderLabel>
        </TableCell>
        <TableCell>
          <TableHeaderLabel>Operator</TableHeaderLabel>
        </TableCell>
        <TableCell>
          <TableHeaderLabel>Status</TableHeaderLabel>
        </TableCell>
      </TableRow>
    </TableHead>
  );
};

TableHeader.propTypes = {
  handleSort: PropTypes.func,
};

export default TableHeader;
