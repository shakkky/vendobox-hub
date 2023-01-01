import React from 'react';
import { Code } from 'react-content-loader';

import { TableBody } from '../../../Components/Table';
import { Tr } from './styles';

const Loader = ({ cols }) => (
  <Tr>
    <td colSpan={cols}>
      <Code width={800} height={50} />
    </td>
  </Tr>
);

const RowLoader = ({ col, tbody }) =>
  tbody ? (
    <TableBody>
      <Loader cols={col} />
    </TableBody>
  ) : (
    <Loader cols={col} />
  );

RowLoader.defaultProps = {
  col: 1,
  tbody: true,
};

export default RowLoader;
