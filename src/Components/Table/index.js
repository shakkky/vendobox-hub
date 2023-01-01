import React from 'react';

import { Table as StyledTable, TableWrapper } from './styles';

const Table = ({ children, tableProps }) => (
  <TableWrapper>
    <StyledTable {...tableProps}>{children}</StyledTable>
  </TableWrapper>
);

Table.defaultProps = {
  tableProps: {},
  paginate: false,
};

export default Table;
export {
  Action,
  ActionIcon,
  ActionText,
  ActionLabel,
  TableRow,
  TableHeaderLabel,
  TableCell,
  NoteCell,
  TableHead,
} from './styles';
export { TableBody, TableSortLabel } from '@material-ui/core';
export { default as Pagination } from './Pagination';
export { default as LEGACYPagination } from './LEGACYPagination';
export { default as NoResult } from './NoResult';
