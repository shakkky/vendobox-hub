import { Grid } from '@mui/material';

import styled from 'styled-components';
import MachineItem from './Components/MachineItem';

const Title = styled.h1`
  font-size: 2rem;
  color: ${p => p.theme.colors.offBlack};
  font-weight: 600;
  padding: 10px 20px;
`;

const Wrapper = styled.div`
  color: ${p => p.theme.colors.offBlack};

  display: flex;
  flex-direction: column;

  height: 100%;
  padding: 20px;
  overflow: auto;
`;

const Shelf = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const assignedPlanogram = {
  id: 1,
  coil_count: 6,
  shelves: [
    {
      id: 1,
      stock_plan_id: 1,
      coils: [
        {
          id: 1,
          coil_no: 22,
          product: {
            id: 1,
            title: 'BBQ',
            label: "Smith's Chips",
            image_url:
              'https://vendobox-documents.s3.ap-southeast-2.amazonaws.com/local/58c68a0f-f6ef-4b6b-b4a0-f10a3d874e09.png',
            default_price: 230,
            cost: 180,
          },
          price: 250,
        },
        {
          id: 2,
          coil_no: 23,
          product: {
            id: 1,
            title: 'Salt & Vinegar',
            label: "Smith's Chips",
            image_url:
              'https://vendobox-documents.s3.ap-southeast-2.amazonaws.com/local/58c68a0f-f6ef-4b6b-b4a0-f10a3d874e09.png',
            default_price: 230,
            cost: 180,
          },
          price: 250,
        },
        {
          id: 3,
          coil_no: 23,
          product: {
            id: 1,
            title: 'Salt & Vinegar',
            label: "Smith's Chips",
            image_url:
              'https://vendobox-documents.s3.ap-southeast-2.amazonaws.com/local/58c68a0f-f6ef-4b6b-b4a0-f10a3d874e09.png',
            default_price: 230,
            cost: 180,
          },
          price: 250,
        },
        {
          id: 4,
          coil_no: 23,
          product: {
            id: 1,
            title: 'Salt & Vinegar',
            label: "Smith's Chips",
            image_url:
              'https://vendobox-documents.s3.ap-southeast-2.amazonaws.com/local/58c68a0f-f6ef-4b6b-b4a0-f10a3d874e09.png',
            default_price: 230,
            cost: 180,
          },
          price: 250,
        },
      ],
    },
    {
      id: 2,
      stock_plan_id: 1,
      coils: [
        {
          id: 5,
          coil_no: 32,
          product: {
            id: 1,
            title: 'Sweet Chilli',
            label: 'Red Rock Deli',
            image_url:
              'https://vendobox-documents.s3.ap-southeast-2.amazonaws.com/local/58c68a0f-f6ef-4b6b-b4a0-f10a3d874e09.png',
            default_price: 230,
            cost: 180,
          },
          price: 250,
        },
        {
          id: 6,
          coil_no: 33,
          product: {
            id: 1,
            title: 'Honey Soy Chicken',
            label: 'Red Rock Deli',
            image_url:
              'https://vendobox-documents.s3.ap-southeast-2.amazonaws.com/local/58c68a0f-f6ef-4b6b-b4a0-f10a3d874e09.png',
            default_price: 230,
            cost: 180,
          },
        },
        {
          id: 7,
          coil_no: 33,
          product: {
            id: 1,
            title: 'Honey Soy Chicken',
            label: 'Red Rock Deli',
            image_url:
              'https://vendobox-documents.s3.ap-southeast-2.amazonaws.com/local/58c68a0f-f6ef-4b6b-b4a0-f10a3d874e09.png',
            default_price: 230,
            cost: 180,
          },
        },
        {
          id: 8,
          coil_no: 33,
          product: {
            id: 1,
            title: 'Honey Soy Chicken',
            label: 'Red Rock Deli',
            image_url:
              'https://vendobox-documents.s3.ap-southeast-2.amazonaws.com/local/58c68a0f-f6ef-4b6b-b4a0-f10a3d874e09.png',
            default_price: 230,
            cost: 180,
          },
        },
      ],
    },
    {
      id: 3,
      stock_plan_id: 1,
      coils: [
        {
          id: 9,
          coil_no: 42,
          product: {
            id: 1,
            title: 'Coke Classic',
            label: 'Coca-cola',
            image_url:
              'https://vendobox-documents.s3.ap-southeast-2.amazonaws.com/local/58c68a0f-f6ef-4b6b-b4a0-f10a3d874e09.png',
            default_price: 180,
            cost: 100,
          },
        },
        {
          id: 10,
          coil_no: 43,
          product: {
            id: 1,
            title: 'Coke Zero',
            label: 'Coca-cola',
            image_url:
              'https://vendobox-documents.s3.ap-southeast-2.amazonaws.com/local/58c68a0f-f6ef-4b6b-b4a0-f10a3d874e09.png',
            default_price: 180,
            cost: 100,
          },
        },
        {
          id: 11,
          coil_no: 43,
          product: {
            id: 1,
            title: 'Coke Zero',
            label: 'Coca-cola',
            image_url:
              'https://vendobox-documents.s3.ap-southeast-2.amazonaws.com/local/58c68a0f-f6ef-4b6b-b4a0-f10a3d874e09.png',
            default_price: 180,
            cost: 100,
          },
        },
        {
          id: 12,
          coil_no: 43,
          product: {
            id: 1,
            title: 'Coke Zero',
            label: 'Coca-cola',
            image_url:
              'https://vendobox-documents.s3.ap-southeast-2.amazonaws.com/local/58c68a0f-f6ef-4b6b-b4a0-f10a3d874e09.png',
            default_price: 180,
            cost: 100,
          },
        },
        {
          id: 13,
          coil_no: 43,
          product: {
            id: 1,
            title: 'Coke Zero',
            label: 'Coca-cola',
            image_url:
              'https://vendobox-documents.s3.ap-southeast-2.amazonaws.com/local/58c68a0f-f6ef-4b6b-b4a0-f10a3d874e09.png',
            default_price: 180,
            cost: 100,
          },
        },
        {
          id: 14,
          coil_no: 43,
          product: {
            id: 1,
            title: 'Sprite',
            label: 'Sprite',
            image_url:
              'https://vendobox-documents.s3.ap-southeast-2.amazonaws.com/production/d04bab8d-d191-4b06-aced-83bf46fc7223.png',
            default_price: 180,
            cost: 100,
          },
        },
        {
          id: 7,
          coil_no: 44,
          product: null,
        },
      ],
    },
    {
      id: 1,
      stock_plan_id: 1,
      coils: [
        {
          id: 1,
          coil_no: 22,
          product: {
            id: 1,
            title: 'BBQ',
            label: "Smith's Chips",
            image_url:
              'https://vendobox-documents.s3.ap-southeast-2.amazonaws.com/local/58c68a0f-f6ef-4b6b-b4a0-f10a3d874e09.png',
            default_price: 230,
            cost: 180,
          },
          price: 250,
        },
        {
          id: 2,
          coil_no: 23,
          product: {
            id: 1,
            title: 'Salt & Vinegar',
            label: "Smith's Chips",
            image_url:
              'https://vendobox-documents.s3.ap-southeast-2.amazonaws.com/local/58c68a0f-f6ef-4b6b-b4a0-f10a3d874e09.png',
            default_price: 230,
            cost: 180,
          },
          price: 250,
        },
        {
          id: 3,
          coil_no: 23,
          product: {
            id: 1,
            title: 'Salt & Vinegar',
            label: "Smith's Chips",
            image_url:
              'https://vendobox-documents.s3.ap-southeast-2.amazonaws.com/local/58c68a0f-f6ef-4b6b-b4a0-f10a3d874e09.png',
            default_price: 230,
            cost: 180,
          },
          price: 250,
        },
        {
          id: 4,
          coil_no: 23,
          product: {
            id: 1,
            title: 'Salt & Vinegar',
            label: "Smith's Chips",
            image_url:
              'https://vendobox-documents.s3.ap-southeast-2.amazonaws.com/local/58c68a0f-f6ef-4b6b-b4a0-f10a3d874e09.png',
            default_price: 230,
            cost: 180,
          },
          price: 250,
        },
      ],
    },
    {
      id: 1,
      stock_plan_id: 1,
      coils: [
        {
          id: 1,
          coil_no: 22,
          product: {
            id: 1,
            title: 'BBQ',
            label: "Smith's Chips",
            image_url:
              'https://vendobox-documents.s3.ap-southeast-2.amazonaws.com/local/58c68a0f-f6ef-4b6b-b4a0-f10a3d874e09.png',
            default_price: 230,
            cost: 180,
          },
          price: 250,
        },
        {
          id: 2,
          coil_no: 23,
          product: {
            id: 1,
            title: 'Salt & Vinegar',
            label: "Smith's Chips",
            image_url:
              'https://vendobox-documents.s3.ap-southeast-2.amazonaws.com/local/58c68a0f-f6ef-4b6b-b4a0-f10a3d874e09.png',
            default_price: 230,
            cost: 180,
          },
          price: 250,
        },
        {
          id: 3,
          coil_no: 23,
          product: {
            id: 1,
            title: 'Salt & Vinegar',
            label: "Smith's Chips",
            image_url:
              'https://vendobox-documents.s3.ap-southeast-2.amazonaws.com/local/58c68a0f-f6ef-4b6b-b4a0-f10a3d874e09.png',
            default_price: 230,
            cost: 180,
          },
          price: 250,
        },
        {
          id: 4,
          coil_no: 23,
          product: {
            id: 1,
            title: 'Salt & Vinegar',
            label: "Smith's Chips",
            image_url:
              'https://vendobox-documents.s3.ap-southeast-2.amazonaws.com/local/58c68a0f-f6ef-4b6b-b4a0-f10a3d874e09.png',
            default_price: 230,
            cost: 180,
          },
          price: 250,
        },
      ],
    },
    {
      id: 1,
      stock_plan_id: 1,
      coils: [
        {
          id: 1,
          coil_no: 22,
          product: {
            id: 1,
            title: 'BBQ',
            label: "Smith's Chips",
            image_url:
              'https://vendobox-documents.s3.ap-southeast-2.amazonaws.com/local/58c68a0f-f6ef-4b6b-b4a0-f10a3d874e09.png',
            default_price: 230,
            cost: 180,
          },
          price: 250,
        },
        {
          id: 2,
          coil_no: 23,
          product: {
            id: 1,
            title: 'Salt & Vinegar',
            label: "Smith's Chips",
            image_url:
              'https://vendobox-documents.s3.ap-southeast-2.amazonaws.com/local/58c68a0f-f6ef-4b6b-b4a0-f10a3d874e09.png',
            default_price: 230,
            cost: 180,
          },
          price: 250,
        },
        {
          id: 3,
          coil_no: 23,
          product: {
            id: 1,
            title: 'Salt & Vinegar',
            label: "Smith's Chips",
            image_url:
              'https://vendobox-documents.s3.ap-southeast-2.amazonaws.com/local/58c68a0f-f6ef-4b6b-b4a0-f10a3d874e09.png',
            default_price: 230,
            cost: 180,
          },
          price: 250,
        },
        {
          id: 4,
          coil_no: 23,
          product: {
            id: 1,
            title: 'Salt & Vinegar',
            label: "Smith's Chips",
            image_url:
              'https://vendobox-documents.s3.ap-southeast-2.amazonaws.com/local/58c68a0f-f6ef-4b6b-b4a0-f10a3d874e09.png',
            default_price: 230,
            cost: 180,
          },
          price: 250,
        },
      ],
    },
  ],
};

// make this just an ID so we can lazy-load
const Viewer = ({ stock_plan_id }: { stock_plan_id: number }) => {
  const plan = assignedPlanogram;
  return (
    <Grid container spacing={2} columns={12}>
      <Grid item xs={12}>
        <Title>{`Re-stock plan #${stock_plan_id}`}</Title>
      </Grid>
      <Grid item xs={12}>
        <Wrapper>
          {plan.shelves.map((s, shelfIndex) => {
            return (
              <Shelf key={shelfIndex}>
                {s.coils.map((c, coilIndex) => {
                  return (
                    <div
                      style={{
                        width: '100%',
                        overflow: 'auto',
                      }}
                      key={coilIndex}
                    >
                      <MachineItem coil={c} isReadOnly />
                    </div>
                  );
                })}
              </Shelf>
            );
          })}
        </Wrapper>
      </Grid>
    </Grid>
  );
};

export default Viewer;
