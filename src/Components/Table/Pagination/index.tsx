import React, { useCallback } from 'react';
import { TablePagination as BaseTablePagination } from '@material-ui/core';
import { TablePaginationBaseProps } from '@material-ui/core/TablePagination';
import { TablePaginationActionsProps } from '@material-ui/core/TablePagination/TablePaginationActions';

import config from '../../../config';
import CustomActionsComponent from './CustomActionsComponent';

const ActionsComponent = CustomActionsComponent as React.ElementType<TablePaginationActionsProps>;

const TablePagination = ({
  page,
  onChangePage,
  cols,
  ...props
}: {
  page: number;

  cols: number;
  count: number;
  rowsPerPage: number;
  onChangePage: (page: number) => void;
} & Partial<TablePaginationBaseProps>): JSX.Element | null => {
  const onPageChange = useCallback((e, page) => onChangePage(page + 1), [
    onChangePage,
  ]);
  if (props.count < props.rowsPerPage) return null;
  return (
    <tr>
      <td colSpan={cols}>
        <BaseTablePagination
          ActionsComponent={ActionsComponent}
          labelDisplayedRows={() => null}
          page={page - 1} // per material-ui - page prop is zero based
          onPageChange={onPageChange} // per material-ui - page prop is zero based
          {...props}
        />
      </td>
    </tr>
  );
};

TablePagination.defaultProps = {
  component: 'div',
  rowsPerPage: config.query.limit,
  rowsPerPageOptions: [],
};

export default TablePagination;
