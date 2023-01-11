import React from 'react';
import { useQuery } from '@apollo/client';
import styled from 'styled-components';
import { queryLocations_locations_locations } from 'schema/queryLocations';

import { Grid } from '@mui/material';
import PageHeader from 'Components/PageHeader';
import { PageWrapper } from 'Components/Page';
import LocationCard from './LocationCard';
import { Icon } from 'Components';

import { QUERY_LOCATIONS } from './queries';

const Locations = () => {
  // const { data = {}, loading = true } = useQuery(QUERY_LOCATIONS);
  const { data = {} } = useQuery(QUERY_LOCATIONS);
  const locations = data?.locations?.locations ?? [];

  return (
    <PageWrapper title="Locations">
      <Grid container spacing={2} columns={12}>
        <Grid item xs={12}>
          <PageHeader title="Locations" />
        </Grid>

        <Grid item xs={12}>
          <Grid container spacing={2} columns={12}>
            {locations.map((l: queryLocations_locations_locations) => {
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

export default Locations;
