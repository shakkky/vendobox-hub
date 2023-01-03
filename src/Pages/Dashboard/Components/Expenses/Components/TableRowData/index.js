import React from 'react';
import PropTypes from 'prop-types';
import { TableRow, TableCell } from 'Components/Table';
import DetailsCell from './Components/DetailsCell';
import StatusCell from './Components/StatusCell';
import CostCell from './Components/CostCell';

const TableRowBody = ({ expense }) => {
  return (
    <TableRow>
      <TableCell>
        <DetailsCell expense={expense} />
      </TableCell>
      <TableCell>
        <StatusCell expense={expense} />
      </TableCell>
      <TableCell>
        <CostCell expense={expense} />
      </TableCell>
    </TableRow>
  );
};

TableRowBody.propTypes = {
  expense: PropTypes.object.isRequired,
};

export default TableRowBody;
