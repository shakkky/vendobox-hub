import React from 'react';
import PropTypes from 'prop-types';
import { TableRow, TableCell } from 'Components/Table';
import styled from 'styled-components';
import { queryLeads_leads_leads } from 'schema/queryLeads';

const Wrapper = styled.div`
  font-size: 1rem;
  font-weight: lighter;
  color: ${p => p.theme.colors.offBlack};
`;

/**
 * TODO: when a row is clicked, open a pop-over the displays more details
 * or maybe even a collapsable row
 */

const TableRowBody = ({ lead }: { lead: queryLeads_leads_leads }) => {
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
          <div>{!!notes ? notes : '-'}</div>
        </Wrapper>
      </TableCell>
    </TableRow>
  );
};

TableRowBody.propTypes = {
  lead: PropTypes.object.isRequired,
};

export default TableRowBody;
