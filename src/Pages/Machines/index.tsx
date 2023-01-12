import React from 'react';
import { useQuery } from '@apollo/client';
import useMediaQuery from 'hooks/useMediaQuery';
import { breakpoints } from 'styles/mui-theme';
import { queryMachines_machines_machines } from 'schema/queryMachines';

import { Grid } from '@mui/material';
import PageHeader from 'Components/PageHeader';
import { PageWrapper } from 'Components/Page';
import Section, { SectionContainer } from 'Components/Section';
import { RowLoader } from 'Components/Loader';
import Table, { TableBody } from 'Components/Table';
import { Button } from 'Components';
import TableRowData from './Components/Table/Row';
import TableHeader from './Components/Table/Header';

import { QUERY_MACHINES } from './queries';

const Machines = () => {
  const { data = {}, loading = true } = useQuery(QUERY_MACHINES);
  const machines = data?.machines?.machines ?? [];

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
                    {machines?.map(
                      (machine: queryMachines_machines_machines) => (
                        <TableRowData
                          key={machine.id}
                          machine={machine}
                          isMobileLayout={isMobile}
                        />
                      )
                    )}
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
