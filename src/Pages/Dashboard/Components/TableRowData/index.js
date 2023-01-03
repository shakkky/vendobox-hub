import React from 'react';
import PropTypes from 'prop-types';
import { TableRow, TableCell } from 'Components/Table';
import RequestorDetailsCell from './Components/RequestorDetailsCell';
import Status from './Components/Status';
import Actions from './Components/Actions';
import { formatDate } from 'Utils';

const TableRowBody = ({ downloadRequest, refetch }) => {
  const { created_at } = downloadRequest;

  const createdAt = formatDate(created_at, {
    format: 'DD/MM/YYYY hh:mm a',
  });

  return (
    <TableRow>
      <TableCell aligntop="t">
        <RequestorDetailsCell downloadRequest={downloadRequest} />
      </TableCell>
      <TableCell aligntop="t">
        <Status downloadRequest={downloadRequest} />
      </TableCell>
      <TableCell aligntop>{createdAt}</TableCell>
      <TableCell aligntop="t">
        <Actions downloadRequest={downloadRequest} refetch={refetch} />
      </TableCell>
    </TableRow>
  );
};

TableRowBody.propTypes = {
  downloadRequest: PropTypes.object.isRequired,
};

export default TableRowBody;
