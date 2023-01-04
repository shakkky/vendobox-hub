import styled from 'styled-components';
import Divider from '@mui/material/Divider';
import Table, { TableBody, TableRow, TableCell } from 'Components/Table';
import { Button } from 'Components';

import { queryLeads_leads_leads } from 'schema/queryLeads';

const Wrapper = styled.div`
  width: 510px;
  padding: 30px;

  @media (max-width: ${props => props.theme.breakpoints.phone}px) {
    width: 90vw;
  }
`;

const Header = styled.div`
  font-weight: 600;
  color: ${p => p.theme.colors.betaGrey};
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const ButtonWrapper = styled.div`
  margin-bottom: 10px;
`;

const LeadDetails = ({ lead }: { lead: queryLeads_leads_leads }) => {
  const {
    name,
    company_name,
    est_traffic,
    machine_type,
    notes,
    status,
    interaction_key,
    created_at,
  } = lead;
  return (
    <Wrapper>
      <ButtonContainer>
        <ButtonWrapper>
          <Button
            label="Mark dismissed"
            outline
            disabled
            // onClick={() => console.log('i should delete now')}
          />
        </ButtonWrapper>
      </ButtonContainer>
      <Divider />
      <Table>
        <TableBody>
          <TableRow compact noBorder>
            <TableCell>
              <Header>Name</Header>
            </TableCell>
            <TableCell>{name}</TableCell>
          </TableRow>
          <TableRow compact noBorder>
            <TableCell>
              <Header>Company</Header>
            </TableCell>
            <TableCell>{company_name}</TableCell>
          </TableRow>
          <TableRow compact noBorder>
            <TableCell>
              <Header>Status</Header>
            </TableCell>
            <TableCell>{status?.label}</TableCell>
          </TableRow>
          <TableRow compact noBorder>
            <TableCell>
              <Header>Est. traffic</Header>
            </TableCell>
            <TableCell>{est_traffic}</TableCell>
          </TableRow>
          <TableRow compact noBorder>
            <TableCell>
              <Header>Machine</Header>
            </TableCell>
            <TableCell>{machine_type}</TableCell>
          </TableRow>
          <TableRow compact noBorder>
            <TableCell>
              <Header>Interaction key</Header>
            </TableCell>
            <TableCell>{interaction_key}</TableCell>
          </TableRow>
          <TableRow compact noBorder>
            <TableCell>
              <Header>Created</Header>
            </TableCell>
            <TableCell>{created_at}</TableCell>
          </TableRow>
          <TableRow compact noBorder>
            <TableCell>
              <Header>Notes</Header>
            </TableCell>
            <TableCell>{notes ? notes : '-'}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Divider />
    </Wrapper>
  );
};

export default LeadDetails;
