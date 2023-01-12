import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { Grid } from '@mui/material';

import PageHeader from 'Components/PageHeader';
import { PageWrapper } from 'Components/Page';
import Section, { SectionContainer } from 'Components/Section';

import Location from './Components/Location';
import PerformanceGraph from './Components/PerformanceGraph';
import Restocks from './Components/Restocks';

import { QUERY_MACHINE } from './queries';

const Machine = () => {
  const { id } = useParams<{ id: string }>();
  // const { data = {}, loading = true, refetch } = useQuery(QUERY_MACHINE, {
  //   variables: {
  //     id,
  //   },
  // });
  const { data = {}, loading = true } = useQuery(QUERY_MACHINE, {
    variables: {
      id,
    },
  });

  const { place, location, restocks } = data?.machineById ?? {};
  const { name } = location ?? {};

  const performance = [
    { date: 'Feb 10', revenue: 300, products_sold: 67 },
    { date: 'Feb 11', revenue: 285, products_sold: 54 },
    { date: 'Feb 12', revenue: 312, products_sold: 70 },
    { date: 'Feb 13', revenue: 330, products_sold: 80 },
    { date: 'Feb 14', revenue: 334, products_sold: 82 },
    { date: 'Feb 15', revenue: 210, products_sold: 49 },
    { date: 'Feb 16', revenue: 300, products_sold: 67 },
    { date: 'Feb 17', revenue: 285, products_sold: 54 },
    { date: 'Feb 18', revenue: 312, products_sold: 70 },
    { date: 'Feb 19', revenue: 330, products_sold: 80 },
    { date: 'Feb 20', revenue: 334, products_sold: 82 },
    { date: 'Feb 21', revenue: 210, products_sold: 49 },
  ];

  // TODO: put a page loader here
  if (loading) return <></>;

  return (
    <PageWrapper title={`${name + (place ? ` - ${place}` : '')}`}>
      <Grid container spacing={2} columns={12}>
        <Grid item xs={12}>
          <PageHeader
            title="Machine overview"
            subHeading={name + (place ? ` - ${place}` : '')}
          />
        </Grid>

        <Grid item xs={12}>
          {/**
           * - TODO - fix the toolip. it should loop over the provided the two lines and display the value for each labels at that location
           */}
          <Section border={false} title="Performance">
            <SectionContainer>
              <PerformanceGraph data={performance} />
            </SectionContainer>
          </Section>
        </Grid>

        <Grid item xs={12}>
          <Section border={false} title="Location">
            <SectionContainer displayBlock>
              <Location location={location} />
            </SectionContainer>
          </Section>
        </Grid>

        {/**
         * 3/3 - Show a list that displays the machine re-stocks
         * - only a restock that has not yet been applied will be editable (opens in ReStockPlanner)
         * - if a restock has already been applied, it opens up in a drawer and is not editable
         * - if a restock has not been applied, when opened, it opens up that particular re-stock plan.
         * - when saved - it should update the re-stock plan in-line
         * - when a new machine is added, just made a whole new plan..
         * - a machine has a stock_plan_id
         * - a machine has a re_stock_plan_id
         * - when a machine is re-stocked, it creates a new re_stock_plan from the previous plan
         *
         * - you can see what's currently in a machine by clicking on a button in the header
         */}
        {/* <Grid item xs={12} sm={7}> */}
        <Grid item xs={12}>
          <Section border={false} title="Re-stocks">
            <SectionContainer>
              <Restocks data={restocks} />
            </SectionContainer>
          </Section>
        </Grid>

        {/**
         * 1/3 - Show a card that displays the machine issues/alarms. One (most recent) with a table underneath as well
         */}

        {/* <Grid item xs={12} sm={5}>
          <Section border={false} title="Alarms/Issues">
            <SectionContainer>
              <FleetOverview fleet={fleet} />
            </SectionContainer>
          </Section>
        </Grid>

        <Grid item xs={12} sm={7}>
          <Section border={false} title="Routes">
            <SectionContainer>
              <FleetOverview fleet={fleet} />
            </SectionContainer>
          </Section>
        </Grid> */}
      </Grid>
    </PageWrapper>
  );
};

export default Machine;
