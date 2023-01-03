import React from 'react';
import PropTypes from 'prop-types';
import { TableRow, TableCell } from 'Components/Table';
import RequestorDetailsCell from './Components/RequestorDetailsCell';
import CompanyDetailsCell from './Components/CompanyDetailsCell';
import MachineTypeCell from './Components/MachineTypeCell';

const TableRowBody = ({ lead }) => {
  return (
    <TableRow>
      <TableCell>
        <RequestorDetailsCell lead={lead} />
      </TableCell>
      <TableCell>
        <CompanyDetailsCell lead={lead} />
      </TableCell>
      <TableCell>
        <MachineTypeCell lead={lead} />
      </TableCell>
    </TableRow>
  );
};

TableRowBody.propTypes = {
  lead: PropTypes.object.isRequired,
};

export default TableRowBody;
