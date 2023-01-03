import React from 'react';
import Table, { TableBody } from 'Components/Table';
import { RowLoader } from 'Components/Loader';

import TableRowData from './Components/TableRowData';

const Expenses = ({
  expenses = [],
  loading,
}: {
  expenses: {
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
          {expenses?.map((expense: { id: number }) => (
            <TableRowData key={expense?.id} expense={expense} />
          ))}
        </TableBody>
      )}
    </Table>
  );
};

export default Expenses;
