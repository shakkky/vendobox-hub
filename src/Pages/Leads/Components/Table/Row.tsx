import React from 'react';
import PropTypes from 'prop-types';
import { TableRow, TableCell } from 'Components/Table';
import styled from 'styled-components';

const Wrapper = styled.div`
  font-size: 1rem;
  font-weight: lighter;
  color: ${p => p.theme.colors.offBlack};
`;

type Lead = {
  id: number;
  name: string;
  phone: string;
  email: string;
  company_name: string;
  est_traffic: string;
  machine_type: string;
  notes?: string | null;
};

/**
 * TODO: when a row is clicked, open a pop-over the displays more details
 * or maybe even a collapsable row
 */

const TableRowBody = ({ lead }: { lead: Lead }) => {
  const { name, company_name, notes } = lead;
  return (
    <TableRow>
      <TableCell>
        <Wrapper>
          <div>{name}</div>
        </Wrapper>
      </TableCell>
      <TableCell>
        <Wrapper>
          <div>{company_name}</div>
        </Wrapper>
      </TableCell>
      <TableCell>
        <Wrapper>
          <div>{notes ?? '-'}</div>
        </Wrapper>
      </TableCell>
    </TableRow>
  );
};

TableRowBody.propTypes = {
  lead: PropTypes.object.isRequired,
};

export default TableRowBody;
