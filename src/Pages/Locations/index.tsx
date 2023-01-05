import React from 'react';
// import { gql, useQuery } from '@apollo/client';
import PageHeader from 'Components/PageHeader';
import { PageWrapper } from 'Components/Page';
import LocationCard from './LocationCard';
import { Icon } from 'Components';
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
  justify-content: center;

  padding: 20px;

  cursor: pointer;

  transition: padding 0.2s ease-in, font-size 0.2s;

  &:hover {
    padding: 15px;
    font-size: 1rem;
  }
`;

const AddInner = styled.div`
  height: 100%;
  width: 100%;
  border: 3px dashed grey;
  text-align: center;
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  justify-content: center;
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
      address_slug: '12 Hermitage St, West Ryde, NSW',
      revenue: 123456,
      total_revenue: 567299,
      next_restock: {
        // this location could be on many routes.. e.g. shak fortnightly wednesday route, jason fortnightly
        operator: {
          first_name: 'Shakeel',
          last_name: 'Mohammed',
          photo:
            'https://vendobox-documents.s3.ap-southeast-2.amazonaws.com/local/d4621ba6-5bf3-4ea7-a627-7c2dfa9fd5c0.png',
        },
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
      address_slug: '12 Hermitage St, West Ryde, NSW',
      revenue: 123456,
      total_revenue: 567299,
      next_restock: {
        // this location could be on many routes.. e.g. shak fortnightly wednesday route, jason fortnightly
        operator: {
          first_name: 'Shakeel',
          last_name: 'Mohammed',
          photo:
            'https://vendobox-documents.s3.ap-southeast-2.amazonaws.com/local/d4621ba6-5bf3-4ea7-a627-7c2dfa9fd5c0.png',
        },
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
      address_slug: '12 Hermitage St, West Ryde, NSW',
      revenue: 123456,
      total_revenue: 567299,
      next_restock: {
        // this location could be on many routes.. e.g. shak fortnightly wednesday route, jason fortnightly
        operator: {
          first_name: 'Shakeel',
          last_name: 'Mohammed',
          photo:
            'https://vendobox-documents.s3.ap-southeast-2.amazonaws.com/local/d4621ba6-5bf3-4ea7-a627-7c2dfa9fd5c0.png',
        },
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
                  <LocationCard location={l} />
                </Grid>
              );
            })}
            <Grid item xs={12} sm={4} md={3}>
              <AddNew>
                <AddInner>
                  <div>
                    <Icon type="add" />
                    Add new
                  </div>
                </AddInner>
              </AddNew>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </PageWrapper>
  );
};

export default Locations;
