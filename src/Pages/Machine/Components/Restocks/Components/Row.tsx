import PropTypes from 'prop-types';
import { TableRow, TableCell } from 'Components/Table';
import { Drawer } from 'Components';
import { Viewer } from 'Components/Stock';
import styled from 'styled-components';

import { useHistory } from 'react-router-dom';

import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';

const Wrapper = styled.div`
  font-weight: lighter;
  color: ${p => p.theme.colors.offBlack};
`;

const Rows = styled.div`
  display: flex;
  flex-direction: rows;
  justify-content: flex-end;
`;

type Restock = {
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
};

const ReStockStatusCodes = {
  NEW: 10,
  COMPLETED: 20,
};

const TableRowBody = ({ data }: { data: Restock }) => {
  const { id, created_at, status, operator } = data;
  const { push } = useHistory();
  return (
    <TableRow>
      <TableCell>
        <Wrapper>
          <div>{created_at}</div>
        </Wrapper>
      </TableCell>
      <TableCell>
        <Wrapper>
          <div>{operator.first_name}</div>
        </Wrapper>
      </TableCell>
      <TableCell>
        <Wrapper>
          <div>{status.label}</div>
        </Wrapper>
      </TableCell>
      <TableCell>
        <Wrapper>
          <Rows>
            {status.code === ReStockStatusCodes.NEW ? (
              <IconButton
                aria-label="more"
                id="long-button"
                aria-haspopup="true"
                onClick={() => push(`/restocks/${id}`)}
              >
                <EditIcon />
              </IconButton>
            ) : (
              <Drawer>
                <Viewer stock_plan_id={id} />
              </Drawer>
            )}
          </Rows>
        </Wrapper>
      </TableCell>
    </TableRow>
  );
};

TableRowBody.propTypes = {
  data: PropTypes.object.isRequired,
};

export default TableRowBody;
