import React from 'react';
import Table, { TableBody } from 'Components/Table';
import { RowLoader } from 'Components/Loader';
import Header from './Components/Header';
import Row from './Components/Row';

const Restocks = ({
  data = [],
  loading,
}: {
  data: {
    id: number;
    created_at: string;
    status: {
      code: number;
      label: string;
    };
    operator: {
      first_name: string;
      last_name: string;
    };
  }[]; // TODO: fix later
  loading?: boolean;
}) => {
  return (
    <Table>
      <Header />
      {loading ? (
        <RowLoader col={5} />
      ) : (
        <TableBody>
          {data?.map(d => (
            <Row key={d.id} data={d} />
          ))}
        </TableBody>
      )}
    </Table>
  );
};

export default Restocks;
