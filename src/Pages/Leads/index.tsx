import React from 'react';
import { useQuery } from '@apollo/client';

import { Grid } from '@mui/material';
import PageHeader from 'Components/PageHeader';
import { PageWrapper } from 'Components/Page';
import Section, { SectionContainer } from 'Components/Section';
import { RowLoader } from 'Components/Loader';
import Table, { TableBody } from 'Components/Table';
import TableRowData from './Components/Table/Row';
import TableHeader from './Components/Table/Header';

import { queryLeads_leads_leads } from 'schema/queryLeads';

import { QUERY_LEADS } from './queries';

const Leads = () => {
  const { data = {}, loading = true } = useQuery(QUERY_LEADS);
  const leads = data?.leads?.leads ?? [];

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
