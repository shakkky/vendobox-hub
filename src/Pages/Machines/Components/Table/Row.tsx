import PropTypes from 'prop-types';
import { TableRow, TableCell } from 'Components/Table';
import Avatar from 'Components/Avatar';
import { Icon as UnstyledIcon } from 'Components';
import styled from 'styled-components';
// import { queryLeads_leads_leads } from 'schema/queryLeads';

import { round } from 'lodash';

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

// : { lead: queryLeads_leads_leads }

type Machine = {
  id: number;
  place?: string | null;
  location: {
    name: string;
    address_slug: string;
  };
  status: {
    code: number;
    label: string;
  };
  warning?: string | null;
  next_restock: {
    operator: {
      first_name: string;
      last_name: string;
      photo: string;
    };
  };
  revenue: {
    today: number;
    yesterday: number;
    week: number;
    month: number;
    since_restock: number;
  };
};

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

const RevenueCell = ({
  revenue,
  combine,
}: {
  revenue: {
    today: number;
    yesterday: number;
    week: number;
    month: number;
    since_restock: number;
  };
  combine: boolean;
}) => {
  if (combine) {
    return (
      <TableCell>
        <Wrapper>
          <Small>${round(revenue.since_restock, 2) / 100}/restock</Small>
          <Small>${round(revenue.today, 2) / 100}/today</Small>
          <Small>${round(revenue.yesterday, 2) / 100}/yesterday</Small>
        </Wrapper>
      </TableCell>
    );
  } else {
    return (
      <>
        <TableCell>
          <Wrapper>
            <div>${round(revenue.since_restock, 2) / 100}</div>
          </Wrapper>
        </TableCell>
        <TableCell>
          <Wrapper>
            <div>${round(revenue.today, 2) / 100}</div>
          </Wrapper>
        </TableCell>
        <TableCell>
          <Wrapper>
            <div>${round(revenue.yesterday, 2) / 100}</div>
          </Wrapper>
        </TableCell>
        <TableCell>
          <Wrapper>
            <div>${round(revenue.week, 2) / 100}</div>
          </Wrapper>
        </TableCell>
        <TableCell>
          <Wrapper>
            <div>${round(revenue.month, 2) / 100}</div>
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
  machine: Machine;
  isMobileLayout: boolean;
}) => {
  const { location, place, status, warning, next_restock, revenue } = machine;
  const { operator } = next_restock ?? {};

  return (
    <TableRow>
      <TableCell>
        <Wrapper>
          <div>
            <b>
              {location.name}
              {place && ` - ${place}`}
            </b>
          </div>
          <Secondary>{location.address_slug}</Secondary>
          {isMobileLayout && (
            <MarginTop>
              <Status status={status} warning={warning} rowLayout />
            </MarginTop>
          )}
        </Wrapper>
      </TableCell>
      {!isMobileLayout && (
        <TableCell>
          <Wrapper>
            <Status status={status} warning={warning} />
          </Wrapper>
        </TableCell>
      )}
      <TableCell>
        <Wrapper>
          <Avatar
            firstName={operator.first_name}
            lastName={operator.last_name}
            photo={operator.photo}
            size={52}
            push={() => null}
          />
        </Wrapper>
      </TableCell>
      <RevenueCell revenue={revenue} combine={isMobileLayout} />
    </TableRow>
  );
};

TableRowBody.propTypes = {
  machine: PropTypes.object.isRequired,
};

export default TableRowBody;
