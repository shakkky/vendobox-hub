import React from 'react';
import { gql, useQuery } from '@apollo/client';
import PageHeader from 'Components/PageHeader';
import { PageWrapper } from 'Components/Page';
import Section, { SectionContainer } from 'Components/Section';
import { RowLoader } from 'Components/Loader';
import Table, { TableBody } from 'Components/Table';
import TableRowData from './Components/Table/Row';
import TableHeader from './Components/Table/Header';
import { Grid } from '@mui/material';

import { queryLeads_leads_leads } from 'schema/queryLeads';

const QUERY_LEADS = gql`
  query queryLeads {
    leads {
      leads {
        id
        name
        company_name
        notes
      }
    }
  }
`;

const Leads = () => {
  const { data = {}, loading = true } = useQuery(QUERY_LEADS);
  const leads = data?.leads?.leads ?? [];

  // const leads = [
  //   {
  //     id: 1,
  //     name: 'Steve Jobs',
  //     phone: '0200000000',
  //     email: 'steve.jobs@smith-and-nephew.com',
  //     company_name: 'Smith & Nephew',
  //     est_traffic: '20 to 50',
  //     machine_type: 'Combo',
  //     notes: 'We would like a combo machine at our Macquarie Park office.',
  //   },
  //   {
  //     id: 2,
  //     name: 'Steve WithoutJobs',
  //     phone: '0200000000',
  //     email: 'steve.withoutjobs@bridgestone.com',
  //     company_name: 'Bridgestone',
  //     est_traffic: 'Less than 20',
  //     machine_type: 'Combo',
  //     notes: 'We would like a combo machine at our Blacktown garage.',
  //   },
  //   {
  //     id: 3,
  //     name: 'Mike Tyson',
  //     phone: '0200000000',
  //     email: 'mt@bcf.com',
  //     company_name: 'Boats, Camping, Fishing',
  //     est_traffic: '20 to 50',
  //     machine_type: 'Combo',
  //     notes: null,
  //   },
  // ];

  return (
    <PageWrapper title="Leads">
      <Grid container spacing={2} columns={12}>
        <Grid item xs={12}>
          <PageHeader
            title="Leads"
            subHeading="from the website funnel, partners, etc"
          />
        </Grid>

        <Grid item xs={12}>
          <Section border={false}>
            <SectionContainer>
              {/* <Filters /> */}
              <Table>
                <TableHeader />
                {loading ? (
                  <RowLoader col={5} />
                ) : (
                  <TableBody>
                    {leads?.map((lead: queryLeads_leads_leads) => (
                      <TableRowData key={lead.id} lead={lead} />
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

export default Leads;
