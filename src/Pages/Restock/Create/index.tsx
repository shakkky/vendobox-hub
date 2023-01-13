import React, { useEffect } from 'react';
import { gql, useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

import PageHeader from 'Components/PageHeader';
import { PageWrapper } from 'Components/Page';
import { Planner } from 'Components';
import { Grid } from '@mui/material';

const PAGE_QUERY = gql`
  query queryMachineStockTemplateAndInventory($id: IntID!) {
    machineById(id: $id) {
      id
      place
      location {
        name
      }
      stock_plan_template {
        shelves {
          coils {
            coil_no
          }
        }
      }
    }
    products {
      products {
        id
        title
        label
        image_url
        default_price
        cost
      }
    }
  }
`;

const CreateRestock = () => {
  const { id } = useParams<{ id: string }>();
  // TODO: add loading spinner
  // const { data = {}, loading = true } = useQuery(PAGE_QUERY);
  const { data = {}, loading = true } = useQuery(PAGE_QUERY, {
    variables: {
      id,
    },
  });

  const _handleSave = (plan: any) => {
    console.log(plan);
  };

  if (loading) return <></>;

  const products = data?.products?.products ?? [];
  const machine = data?.machineById ?? {};

  const {
    place,
    location: { name },
    stock_plan_template,
  } = machine;

  return (
    <PageWrapper title={`${name}`}>
      <Grid container spacing={2} columns={12}>
        <Grid item xs={12}>
          <PageHeader
            title={name + (place ? ` - ${place}` : '')}
            subHeading="Create machine stock plan"
          />
        </Grid>
        <Grid item xs={12}>
          <Planner
            initial={{ ...stock_plan_template }}
            currentPlan={stock_plan_template}
            inventory={products}
            onSaveCallback={_handleSave}
          />
        </Grid>
      </Grid>
    </PageWrapper>
  );
};

export default CreateRestock;
