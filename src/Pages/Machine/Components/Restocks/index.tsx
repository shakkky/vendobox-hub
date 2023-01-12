import React from 'react';
import { queryMachineById_machineById_restocks } from 'schema/queryMachineById';

import Table, { TableBody } from 'Components/Table';
import { RowLoader } from 'Components/Loader';
import Header from './Components/Header';
import Row from './Components/Row';

const Restocks = ({
  data = [],
  loading,
}: {
  data: queryMachineById_machineById_restocks[];
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
