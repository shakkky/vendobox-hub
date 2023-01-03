import React from 'react';
// import { gql, useQuery } from '@apollo/client';
import { round } from 'lodash';
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
import FleetOverview from './Components/FleetOverview';
import Expenses from './Components/Expenses';
import VisitGraph from './Components/VisitGraph';

const CardContainer = styled.div`
  margin: 0 5px;
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
      value: round(98788, 2) / 100,
      backgroundColor: greenish,
      masked: true,
    },
    {
      id: 2,
      header: 'Expenses',
      unit: '$',
      value: round(21710, 2) / 100,
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

  const fleet = [
    {
      id: 1,
      location: 'Douglass Partners',
      address: '123 Example Street, Exampleville, 2000',
      status: {
        code: 10,
        label: 'online',
      },
      warning: null,
      operator: {
        first_name: 'Mansoor',
        last_name: 'Hussein',
        photo: '',
      },
      revenue: 71288,
      revenue_since_restock: 34255,
    },
    {
      id: 2,
      location: 'Storage King - Thornleigh',
      address: '456 Example Street, Exampleville, 2000',
      status: {
        code: 10,
        label: 'online',
      },
      warning: null,
      operator: {
        first_name: 'Sheena',
        last_name: 'Raj',
        photo: '',
      },
      revenue: 4510,
      revenue_since_restock: 1325,
    },
    {
      id: 3,
      location: 'Jax Tyres - Baulkham Hills',
      address: '789 Example Street, Exampleville, 2000',
      status: {
        code: 20,
        label: 'offline',
      },
      warning: null,
      operator: {
        first_name: 'Jason',
        last_name: 'Vithoulkas',
        photo: '',
      },
      revenue: 23050,
      revenue_since_restock: 6725,
    },
  ];

  const visits = [
    { date: '10th Feb', count: 30 },
    { date: '11th Feb', count: 39 },
    { date: '12th Feb', count: 18 },
    { date: '13th Feb', count: 24 },
    { date: '14th Feb', count: 35 },
    { date: '15th Feb', count: 23 },
  ];

  const expenses = [
    {
      id: 1,
      title: 'One-off payment to operator',
      paid_to: null,
      status: {
        code: 10,
        label: 'paid',
      },
      cost_in_cents: 5780,
    },
    {
      id: 2,
      title: 'Purchased new stock',
      paid_to: null,
      status: {
        code: 10,
        label: 'paid',
      },
      cost_in_cents: 8430,
    },
    {
      id: 3,
      title: 'One-off payment to operator',
      paid_to: null,
      status: {
        code: 10,
        label: 'payment pending',
      },
      cost_in_cents: 2500,
    },
    {
      id: 4,
      title: 'One-off payment to operator',
      paid_to: null,
      status: {
        code: 10,
        label: 'payment pending',
      },
      cost_in_cents: 5000,
    },
  ];

  /**
   * This page should display:
   * - cards with revenue, expenses, etc
   * - table with expenses over the last 7 days
   * - table with current fleet status
   */

  return (
    <PageWrapper title="Dashboard">
      <Grid container spacing={2} columns={12}>
        <Grid item xs={12}>
          <PageHeader title="Dashboard" subHeading="Welcome, Shakeel!" />
        </Grid>

        <Grid item xs={12}>
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
        </Grid>

        <Grid item xs={12} sm={7}>
          <PageHeader subHeading="Fleet overview">
            <FleetOverview fleet={fleet} />
          </PageHeader>
        </Grid>

        <Grid item xs={12} sm={5}>
          <PageHeader subHeading="Expenses">
            <Expenses expenses={expenses} />
          </PageHeader>
        </Grid>

        <Grid item xs={12} sm={7}>
          <PageHeader subHeading="Visits">
            <VisitGraph visits={visits} />
          </PageHeader>
        </Grid>

        <Grid item xs={12} sm={5}>
          <PageHeader subHeading="Top searches">
            whenever someone types something into vendobox suggest, we display
            it here
          </PageHeader>
        </Grid>

        <Grid item xs={12} sm={5}>
          <PageHeader subHeading="Most popular products">
            show a graph/leaderboard/pie chart(?) of the most popular products
            we have sold over the last 7 days
          </PageHeader>
        </Grid>
      </Grid>

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
