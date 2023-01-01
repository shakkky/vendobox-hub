import { TablePagination as BaseLEGACYTablePagination } from '@material-ui/core';
import { TablePaginationBaseProps } from '@material-ui/core/TablePagination';
import { TablePaginationActionsProps } from '@material-ui/core/TablePagination/TablePaginationActions';

import config from '../../../config';
import CustomActionsComponent from './CustomActionsComponent';

const ActionsComponent = CustomActionsComponent as React.ElementType<TablePaginationActionsProps>;

const LEGACYTablePagination = ({
  cols,
  count,
  rowsPerPage,
  onChangePage,
  ...props
}: {
  cols: number;
  count: number;
  rowsPerPage: number;
  onChangePage: (
    e: React.MouseEvent<HTMLButtonElement> | null,
    page: number
  ) => void;
  page: number;
} & Partial<TablePaginationBaseProps>): JSX.Element | null => {
  if (count < rowsPerPage) return null;
  return (
    <tr>
      <td colSpan={cols}>
        <BaseLEGACYTablePagination
          ActionsComponent={ActionsComponent}
          labelDisplayedRows={() => null}
          rowsPerPage={rowsPerPage}
          count={count}
          onPageChange={onChangePage}
          {...props}
        />
      </td>
    </tr>
  );
};

LEGACYTablePagination.defaultProps = {
  component: 'div',
  rowsPerPage: config.query.limit,
  rowsPerPageOptions: [],
};

export default LEGACYTablePagination;
