import React from 'react';
import styled from 'styled-components';
import { queryMachineById_machineById_location } from 'schema/queryMachineById';

import { Grid } from '@mui/material';
import Avatar from 'Components/Avatar';

const Location = ({
  location,
}: {
  location: queryMachineById_machineById_location;
}) => {
  const {
    name,
    address,
    contact_first_name,
    contact_last_name,
    contact_role,
    contact_phone,
    notes,
  } = location;
  const { google_address } = address ?? {};
  return (
    <Wrapper>
      <Grid container spacing={2} columns={12}>
        <Grid item xs={12} sm={4}>
          <CardWrapper>
            <div>
              <LargeText>{name}</LargeText>
              <MediumText>{google_address}</MediumText>
            </div>
            {contact_first_name && (
              <ContactWrapper>
                <Rows>
                  <MarginRight>
                    <Avatar
                      firstName={contact_first_name}
                      lastName={contact_last_name}
                      size={46}
                    />
                  </MarginRight>
                  <Columns>
                    <ContactName>
                      {contact_first_name ?? ''} {contact_last_name ?? ''}
                    </ContactName>
                    <ContactDetail>{contact_role}</ContactDetail>
                    <ContactDetail>{contact_phone}</ContactDetail>
                  </Columns>
                </Rows>
              </ContactWrapper>
            )}
            <Notes>{notes}</Notes>
          </CardWrapper>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Map />
        </Grid>
      </Grid>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const CardWrapper = styled.div`
  padding: 18px 0px;

  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const MediumText = styled.h6`
  color: ${p => p.theme.colors.regentGrey};
`;

const ContactName = styled.p`
  color: ${p => p.theme.colors.offBlack};
  margin-bottom: 2px;
`;

const ContactDetail = styled.p`
  color: ${p => p.theme.colors.regentGrey};
  margin-bottom: 2px;
`;

const LargeText = styled.h6`
  color: ${p => p.theme.colors.offBlack};
  font-weight: 600;
`;

const Rows = styled.div`
  display: flex;
  flex-direction: row;
`;

const Columns = styled.div`
  display: flex;
  flex-direction: column;
`;

const MarginRight = styled.div`
  margin-right: 12px;
`;

const ContactWrapper = styled.div`
  margin-top: 12px;
`;

const Notes = styled.p`
  color: ${p => p.theme.colors.regentGrey};
`;

const Map = styled.div`
  border: 1px solid lightgrey;
  border-radius: 4px;
  height: 350px;
  width: 100%;
  background-color: #fcfcfc;
`;

export default Location;
