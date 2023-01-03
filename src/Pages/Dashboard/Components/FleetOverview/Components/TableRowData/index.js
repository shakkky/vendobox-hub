import React from 'react';
import PropTypes from 'prop-types';
import { TableRow, TableCell } from 'Components/Table';
import DetailsCell from './Components/DetailsCell';
import OperatorDetailsCell from './Components/OperatorDetailsCell';
import RevenueCell from './Components/RevenueCell';

const TableRowBody = ({ machine }) => {
  return (
    <TableRow>
      <TableCell>
        <DetailsCell machine={machine} />
      </TableCell>
      <TableCell>
        <OperatorDetailsCell machine={machine} />
      </TableCell>
      <TableCell>
        <RevenueCell machine={machine} />
      </TableCell>
    </TableRow>
  );
};

TableRowBody.propTypes = {
  machine: PropTypes.object.isRequired,
};

export default TableRowBody;
