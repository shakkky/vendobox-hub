import React from 'react';
// import { gql, useQuery } from '@apollo/client';
import PageHeader from 'Components/PageHeader';
import { PageWrapper } from 'Components/Page';
// import Section, { SectionContainer } from 'Components/Section';
// import { RowLoader } from 'Components/Loader';
// import Table, { TableBody } from 'Components/Table';
// import TableRowData from './Components/TableRowData';
// import TableHeader from './Components/TableHeader';
import Card from './Components/Card';

import { Grid } from '@mui/material';

import styled from 'styled-components';

const CardContainer = styled.div`
  margin: 30px 5px;
`;

// const QUERY_DOWNLOAD_REQUESTS = gql`
//   query queryDownloadRequests {
//     downloadRequests {
//       downloadRequests {
//         id
//         name
//         email
//         is_download_approved
//         has_accepted_terms_and_conditions
//         comments
//         download_link
//         created_at
//       }
//     }
//   }
// `;

const Dashboard = () => {
  // const { data = {}, loading = true, refetch } = useQuery(
  //   QUERY_DOWNLOAD_REQUESTS
  // );

  const greenish = '#1DA865';
  const redish = '#F07C45';
  const blueish = '#008BF5';
  const purpleish = '#9B8DCE';

  const cards = [
    {
      id: 1,
      header: 'Weekly revenue',
      unit: '$',
      value: 987.88,
      backgroundColor: greenish,
      masked: true,
    },
    {
      id: 2,
      header: 'Expenses',
      unit: '$',
      value: 142.35,
      backgroundColor: redish,
      masked: true,
    },
    {
      id: 3,
      header: 'Products sold',
      unit: null,
      value: 89,
      backgroundColor: blueish,
      masked: false,
    },
    {
      id: 4,
      header: 'Visits',
      unit: null,
      value: 201,
      backgroundColor: purpleish,
      masked: false,
    },
  ];

  return (
    <PageWrapper title="Dashboard">
      <PageHeader title="Dashboard" subHeading="Welcome, Shakeel!" />

      <CardContainer>
        <Grid container direction="row" spacing={3} columns={12}>
          {cards?.map(card => (
            <Grid item xs={6} sm={3} key={card.id}>
              <Card
                key={card.id}
                header={card.header}
                unit={card.unit}
                value={card.value}
                backgroundColor={card.backgroundColor}
                masked={card.masked}
              />
            </Grid>
          ))}
        </Grid>
      </CardContainer>

      {/* <Section border={false}>
        <SectionContainer fullWidth>
          <Table>
            <TableHeader />
            {loading ? (
              <RowLoader col={5} />
            ) : (
              <TableBody>
                {downloadRequests?.map(downloadRequest => (
                  <TableRowData
                    key={downloadRequest.id}
                    downloadRequest={downloadRequest}
                    refetch={refetch}
                  />
                ))}
              </TableBody>
            )}
          </Table>
        </SectionContainer>
      </Section> */}
    </PageWrapper>
  );
};

export default Dashboard;
