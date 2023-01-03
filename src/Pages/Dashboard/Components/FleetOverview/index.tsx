import React from 'react';
import Table, { TableBody } from 'Components/Table';
import { RowLoader } from 'Components/Loader';

import TableRowData from './Components/TableRowData';

const FleetOverview = ({
  fleet = [],
  loading,
}: {
  fleet: {
    id: number;
  }[]; // TODO: fix later
  loading?: boolean;
}) => {
  return (
    <Table>
      {loading ? (
        <RowLoader col={5} />
      ) : (
        <TableBody>
          {fleet?.map((machine: { id: number }) => (
            <TableRowData key={machine?.id} machine={machine} />
          ))}
        </TableBody>
      )}
    </Table>
  );
};

export default FleetOverview;
