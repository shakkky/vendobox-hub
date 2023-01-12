import PropTypes from 'prop-types';
import { round } from 'lodash';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { queryMachines_machines_machines } from 'schema/queryMachines';

import IconButton from '@mui/material/IconButton';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { TableRow, TableCell } from 'Components/Table';
import Avatar from 'Components/Avatar';
import { Icon as UnstyledIcon } from 'Components';

const RevenueCell = ({
  id,
  revenue,
  combine,
}: {
  id: number;
  revenue: {
    today: number | null;
    yesterday: number | null;
    week: number | null;
    month: number | null;
    since_restock: number | null;
  };
  combine: boolean;
}) => {
  const { push } = useHistory();
  if (combine) {
    return (
      <>
        <TableCell>
          <Wrapper>
            <Small>${round(revenue.since_restock ?? 0, 2) / 100}/restock</Small>
            <Small>${round(revenue.today ?? 0, 2) / 100}/today</Small>
            <Small>${round(revenue.yesterday ?? 0, 2) / 100}/yesterday</Small>
          </Wrapper>
        </TableCell>
        <TableCell>
          <Wrapper>
            <IconButton
              aria-label="more"
              id="long-button"
              aria-haspopup="true"
              onClick={() => push(`/machines/${id}`)}
            >
              <NavigateNextIcon />
            </IconButton>
          </Wrapper>
        </TableCell>
      </>
    );
  } else {
    return (
      <>
        <TableCell>
          <Wrapper>
            <div>${round(revenue.since_restock ?? 0, 2) / 100}</div>
          </Wrapper>
        </TableCell>
        <TableCell>
          <Wrapper>
            <div>${round(revenue.today ?? 0, 2) / 100}</div>
          </Wrapper>
        </TableCell>
        <TableCell>
          <Wrapper>
            <div>${round(revenue.yesterday ?? 0, 2) / 100}</div>
          </Wrapper>
        </TableCell>
        <TableCell>
          <Wrapper>
            <div>${round(revenue.week ?? 0, 2) / 100}</div>
          </Wrapper>
        </TableCell>
        <TableCell>
          <Wrapper>
            <div>${round(revenue.month ?? 0, 2) / 100}</div>
          </Wrapper>
        </TableCell>
        <TableCell>
          <Wrapper>
            <IconButton
              aria-label="more"
              id="long-button"
              aria-haspopup="true"
              onClick={() => push(`/machines/${id}`)}
            >
              <NavigateNextIcon />
            </IconButton>
          </Wrapper>
        </TableCell>
      </>
    );
  }
};

const Status = ({
  status,
  warning,
  rowLayout,
}: {
  status: {
    code: number;
    label: string;
  };
  warning?: string | null;
  rowLayout?: boolean;
}) => {
  if (rowLayout) {
    return (
      <Rows>
        <HealthIndicator color={status?.code === 10 ? '#1DA865' : 'red'} />
        {status?.label}
        {warning && (
          <MarginLeft>
            <Rows>
              <Icon type="warning" />
              <Smaller>{warning}</Smaller>
            </Rows>
          </MarginLeft>
        )}
      </Rows>
    );
  } else {
    return (
      <>
        <Rows>
          <HealthIndicator color={status?.code === 10 ? '#1DA865' : 'red'} />
          {status?.label}
        </Rows>
        {warning && (
          <MarginTop>
            <Rows>
              <Icon type="warning" />
              <Smaller>{warning}</Smaller>
            </Rows>
          </MarginTop>
        )}
      </>
    );
  }
};

const TableRowBody = ({
  machine,
  isMobileLayout = false,
}: {
  machine: queryMachines_machines_machines;
  isMobileLayout: boolean;
}) => {
  const {
    id,
    place,
    location,
    status,
    warning,
    next_restock,
    revenue,
  } = machine;
  const { operator } = next_restock ?? {};
  const { address } = location ?? {};

  return (
    <TableRow>
      <TableCell>
        <Wrapper>
          {location && (
            <>
              <div>
                <b>
                  {location.name}
                  {place && ` - ${place}`}
                </b>
              </div>
              <Secondary>{address?.google_address}</Secondary>
            </>
          )}
          {isMobileLayout && (
            <>
              {status && (
                <MarginTop>
                  <Status status={status} warning={warning} rowLayout />
                </MarginTop>
              )}
            </>
          )}
        </Wrapper>
      </TableCell>
      {!isMobileLayout && (
        <TableCell>
          {status && (
            <Wrapper>
              <Status status={status} warning={warning} />
            </Wrapper>
          )}
        </TableCell>
      )}
      <TableCell>
        {operator && (
          <Wrapper>
            <Avatar
              firstName={operator.first_name}
              lastName={operator.last_name}
              // photo={operator.photo}
              size={52}
              push={() => null}
            />
          </Wrapper>
        )}
      </TableCell>
      {revenue && (
        <RevenueCell id={id} revenue={revenue} combine={isMobileLayout} />
      )}
    </TableRow>
  );
};

const Wrapper = styled.div`
  font-weight: lighter;
  color: ${p => p.theme.colors.offBlack};
`;

const HealthIndicator = styled.div`
  height: 14px;
  width: 14px;
  border-radius: 50%;
  background-color: ${p => p.color};

  margin-right: 4px;
`;

const Rows = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;

  white-space: nowrap;
`;

const Small = styled.p`
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
`;

const Secondary = styled.div`
  color: ${p => p.theme.colors.regentGrey};
`;

const Icon = styled(UnstyledIcon)`
  color: ${p => p.theme.colors.warning};
  font-size: 1.2rem !important;
  margin-left: -3px;
`;

const Smaller = styled.p`
  font-size: 0.8rem;
  margin-bottom: -0.1rem;
  margin-left: 0.2ch;
`;

const MarginLeft = styled.div`
  margin-left: 4px;
`;

const MarginTop = styled.div`
  margin-top: 6px;
`;

TableRowBody.propTypes = {
  machine: PropTypes.object.isRequired,
};

export default TableRowBody;
