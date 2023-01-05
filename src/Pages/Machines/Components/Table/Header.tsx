import React from 'react';
import PropTypes from 'prop-types';

import {
  TableRow,
  TableHeaderLabel,
  TableCell,
  TableHead,
} from 'Components/Table';

const TableHeader = ({
  isMobileLayout = false,
}: {
  isMobileLayout: boolean;
}) => {
  const condensedTableColumns = ['Location', 'Operator', 'Revenue'];
  const expandedTableColumns = [
    'Location',
    'Status',
    'Operator',
    'Restock',
    'Today',
    'Yesterday',
    'Week',
    'Month',
  ];

  const tableColumnType = isMobileLayout
    ? condensedTableColumns
    : expandedTableColumns;

  return (
    <TableHead>
      <TableRow>
        {tableColumnType.map(t => {
          return (
            <TableCell key={t}>
              <TableHeaderLabel>{t}</TableHeaderLabel>
            </TableCell>
          );
        })}
      </TableRow>
    </TableHead>
  );
};

TableHeader.propTypes = {
  handleSort: PropTypes.func,
};

export default TableHeader;
