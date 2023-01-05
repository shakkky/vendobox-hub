import React from 'react';
// import { gql, useQuery } from '@apollo/client';
import PageHeader from 'Components/PageHeader';
import { PageWrapper } from 'Components/Page';
import TableRowData from './Components/Table/Row';
import { Grid } from '@mui/material';

import styled from 'styled-components';

// const QUERY_LEADS = gql`
//   query queryLeads {
//     leads {
//       leads {
//         id
//         name
//         phone
//         email
//         company_name
//         est_traffic
//         machine_type
//         notes
//         status {
//           code
//           label
//         }
//         interaction_key
//         created_at
//       }
//     }
//   }
// `;

const AddNew = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 20px;
`;

const AddInner = styled.div`
  height: 100%;
  width: 100%;
  // border: 3px dashed lightgrey;
  text-align: center;
  padding: 40px;
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='5' ry='5' stroke='%23333' opacity='0.5' stroke-width='4' stroke-dasharray='21%2c12' stroke-dashoffset='46' stroke-linecap='butt'/%3e%3c/svg%3e");
  border-radius: 5px;
`;

const Locations = () => {
  // const { data = {}, loading = true } = useQuery(QUERY_LEADS);
  // const leads = data?.leads?.leads ?? [];

  const locations = [
    {
      id: 1,
      name: 'Douglass Partners',
      contact_name: 'Leanne',
      contact_phone: '0000000000',
      contact_email: 'l@dp.com.au',
      photo:
        'https://vendobox-documents.s3.ap-southeast-2.amazonaws.com/local/d4621ba6-5bf3-4ea7-a627-7c2dfa9fd5c0.png',
      address: {
        street_number: 12,
        street_name: 'hermitage',
        street_type: 'st',
        suburb: 'West Ryde',
        state: 'NSW',
      },
      machines: [{ id: 1 }, { id: 2 }],
    },
    {
      id: 2,
      name: 'Douglass Partners2',
      contact_name: 'Leanne',
      contact_phone: '0000000000',
      contact_email: 'l@dp.com.au',
      photo:
        'https://vendobox-documents.s3.ap-southeast-2.amazonaws.com/local/d4621ba6-5bf3-4ea7-a627-7c2dfa9fd5c0.png',
      address: {
        street_number: 12,
        street_name: 'hermitage',
        street_type: 'st',
        suburb: 'West Ryde',
        state: 'NSW',
      },
      machines: [{ id: 1 }, { id: 2 }],
    },
    {
      id: 3,
      name: 'Douglass Partners3',
      contact_name: 'Leanne',
      contact_phone: '0000000000',
      contact_email: 'l@dp.com.au',
      photo:
        'https://vendobox-documents.s3.ap-southeast-2.amazonaws.com/local/d4621ba6-5bf3-4ea7-a627-7c2dfa9fd5c0.png',
      address: {
        street_number: 12,
        street_name: 'hermitage',
        street_type: 'st',
        suburb: 'West Ryde',
        state: 'NSW',
      },
      machines: [{ id: 1 }, { id: 2 }],
    },
    {
      id: 4,
      name: 'Douglass Partners4',
      contact_name: 'Leanne',
      contact_phone: '0000000000',
      contact_email: 'l@dp.com.au',
      photo:
        'https://vendobox-documents.s3.ap-southeast-2.amazonaws.com/local/d4621ba6-5bf3-4ea7-a627-7c2dfa9fd5c0.png',
      address: {
        street_number: 12,
        street_name: 'hermitage',
        street_type: 'st',
        suburb: 'West Ryde',
        state: 'NSW',
      },
      machines: [{ id: 1 }, { id: 2 }],
    },
  ];

  return (
    <PageWrapper title="Locations">
      <Grid container spacing={2} columns={12}>
        <Grid item xs={12}>
          <PageHeader title="Locations" />
        </Grid>

        <Grid item xs={12}>
          <Grid container spacing={2} columns={12}>
            {locations.map(l => {
              return (
                <Grid item xs={12} sm={4} md={3} key={l.id}>
                  <TableRowData location={l} />
                </Grid>
              );
            })}
            <Grid item xs={12} sm={4} md={3}>
              <AddNew>
                <AddInner>Add new</AddInner>
              </AddNew>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </PageWrapper>
  );
};

export default Locations;
