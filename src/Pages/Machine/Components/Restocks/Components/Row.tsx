import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { queryMachineById_machineById_restocks } from 'schema/queryMachineById';

import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import { TableRow, TableCell } from 'Components/Table';
import { Drawer } from 'Components';
import { Viewer } from 'Components/Stock';

import { formatDate } from 'Utils/index-v2';

const ReStockStatusCodes = {
  NEW: 10,
  COMPLETED: 20,
};

const TableRowBody = ({
  data,
}: {
  data: queryMachineById_machineById_restocks;
}) => {
  const { id, created_at, status, operator } = data;
  const { push } = useHistory();
  return (
    <TableRow>
      <TableCell>
        <Wrapper>
          <div>{formatDate(created_at)}</div>
        </Wrapper>
      </TableCell>
      <TableCell>
        {operator && (
          <Wrapper>
            <div>{operator.first_name}</div>
          </Wrapper>
        )}
      </TableCell>
      <TableCell>
        {status && (
          <Wrapper>
            <div>{status.label}</div>
          </Wrapper>
        )}
      </TableCell>
      <TableCell>
        <Wrapper>
          <Rows>
            {status?.code === ReStockStatusCodes.NEW ? (
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

const Wrapper = styled.div`
  font-weight: lighter;
  color: ${p => p.theme.colors.offBlack};
`;

const Rows = styled.div`
  display: flex;
  flex-direction: rows;
  justify-content: flex-end;
`;

TableRowBody.propTypes = {
  data: PropTypes.object.isRequired,
};

export default TableRowBody;
