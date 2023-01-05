import React from 'react';
// import { gql, useQuery } from '@apollo/client';
import PageHeader from 'Components/PageHeader';
import { PageWrapper } from 'Components/Page';
import Section, { SectionContainer } from 'Components/Section';
import { RowLoader } from 'Components/Loader';
import Table, { TableBody } from 'Components/Table';
import { Button } from 'Components';
import TableRowData from './Components/Table/Row';
import TableHeader from './Components/Table/Header';
import { Grid } from '@mui/material';

import useMediaQuery from 'hooks/useMediaQuery';
import { breakpoints } from 'styles/mui-theme';

// import { queryLeads_leads_leads } from 'schema/queryLeads';

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

const Machines = () => {
  // const { data = {}, loading = true } = useQuery(QUERY_LEADS);
  // const leads = data?.leads?.leads ?? [];

  const machines = [
    {
      id: 1,
      place: 'Staff room',
      location: {
        name: 'Douglass Partners',
        address_slug: '123 Example Street, Exampleville, 2000',
      },
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
      revenue: {
        today: 10268,
        yesterday: 10100,
        week: 71288,
        month: 285152,
        since_restock: 34255,
      },
    },
    {
      id: 2,
      location: {
        name: 'Storage King - Thornleigh',
        address_slug: '456 Example Street, Exampleville, 2000',
      },
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
      revenue: {
        today: 1100,
        yesterday: 1200,
        week: 4510,
        month: 18040,
        since_restock: 1325,
      },
    },
    {
      id: 3,
      location: {
        name: 'Jax Tyres - Baulkham Hills',
        address_slug: '789 Example Street, Exampleville, 2000',
      },
      status: {
        code: 20,
        label: 'offline',
      },
      warning: 'Device lost connection',
      operator: {
        first_name: 'Jason',
        last_name: 'Vithoulkas',
        photo: '',
      },
      revenue: {
        today: 3314,
        yesterday: 3270,
        week: 23050,
        month: 92200,
        since_restock: 6725,
      },
    },
  ];

  const loading = false;
  const isMobile = useMediaQuery(breakpoints.phone);

  return (
    <PageWrapper title="Machines">
      <Grid container spacing={2} columns={12}>
        <Grid item xs={12}>
          <PageHeader
            title="Machines"
            action={<Button icon="add" label="Add new" />}
          />
        </Grid>

        <Grid item xs={12}>
          <Section border={false}>
            <SectionContainer>
              {/* <Filters /> */}
              <Table>
                <TableHeader isMobileLayout={isMobile} />
                {loading ? (
                  <RowLoader col={5} />
                ) : (
                  <TableBody>
                    {machines?.map(machine => (
                      <TableRowData
                        key={machine.id}
                        machine={machine}
                        isMobileLayout={isMobile}
                      />
                    ))}
                  </TableBody>
                )}
              </Table>
            </SectionContainer>
          </Section>
        </Grid>
      </Grid>
    </PageWrapper>
  );
};

export default Machines;
