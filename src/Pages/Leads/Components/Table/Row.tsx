import PropTypes from 'prop-types';
import { TableRow, TableCell } from 'Components/Table';
import { Drawer } from 'Components';
import LeadDetails from './LeadDetails';
import styled from 'styled-components';
import { queryLeads_leads_leads } from 'schema/queryLeads';

const Wrapper = styled.div`
  font-size: 1rem;
  font-weight: lighter;
  color: ${p => p.theme.colors.offBlack};
`;

const Rows = styled.div`
  display: flex;
  flex-direction: rows;
  justify-content: flex-end;
`;

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
      <TableCell>
        <Wrapper>
          <Rows>
            <Drawer>
              <LeadDetails lead={lead} />
            </Drawer>
          </Rows>
        </Wrapper>
      </TableCell>
    </TableRow>
  );
};

TableRowBody.propTypes = {
  lead: PropTypes.object.isRequired,
};

export default TableRowBody;
