import React, { useState, useRef } from 'react';
// import { gql, useQuery } from '@apollo/client';
import PageHeader from 'Components/PageHeader';
import { PageWrapper } from 'Components/Page';
import Section, { SectionContainer } from 'Components/Section';
// import { RowLoader } from 'Components/Loader';
// import Table, { TableBody } from 'Components/Table';
// import { Button } from 'Components';
// import TableRowData from './Components/Table/Row';
// import TableHeader from './Components/Table/Header';
import { Grid } from '@mui/material';

import useMediaQuery from 'hooks/useMediaQuery';
import { breakpoints } from 'styles/mui-theme';
import { round } from 'lodash';
import styled from 'styled-components';
import IconButton from '@mui/material/IconButton';
import DoneIcon from '@mui/icons-material/Done';
import ClearIcon from '@mui/icons-material/Clear';
// import EditIcon from '@mui/icons-material/Edit';

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

const MachineWrapper = styled.div`
  background-color: white;
  border-radius: 8px;
  color: ${p => p.theme.colors.offBlack};

  box-shadow: 1px 1px 2px #aaa;

  display: flex;
  flex-direction: column;

  // background-image: url(https://cdn-dev.vendobox.com.au/static/images/fas900-machine.png);

  height: 100%;

  padding: 20px;

  overflow: auto;
`;

// &:not:first-child {
//   border-left: 1px solid lightgrey;
// }

// &:first-child {
//   border-left: 1px solid lightgrey;
// }

const Shelf = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

// &:last-of-type {
//   border-right: none;
// }

// &:first-of-type {
//   border-left: none;
// }

const Coil = styled.div`
  height: 100%;
  width: 100%;

  border: 0.5px solid lightgrey;

  display: flex;
  flex-direction: column;

  text-align: center;

  overflow: auto;

  cursor: pointer;

  padding: 12px;

  align-items: center;

  &:active:hover {
    background-color: ${p => p.theme.colors.jade};
  }
`;

const ProductWrapper = styled.div`
  font-weight: lighter;
  background-color: white;
  border-radius: 4px;
  border: 1px solid lightgrey;
  color: ${p => p.theme.colors.offBlack};

  display: flex;
  flex-direction: column;

  text-align: center;

  overflow: auto;

  cursor: pointer;

  padding: 12px;

  align-items: center;

  &:hover {
    box-shadow: 2px 2px 4px #aaa;
  }
`;

const MarginTop = styled.div`
  margin-top: 6px;
`;

const Small = styled.p`
  font-size: 0.6rem;
  margin-bottom: 0.2rem;
`;

const VerySmall = styled.p`
  font-size: 0.5rem;
  margin-bottom: unset;
`;

const CoilLabel = styled.div`
  border-radius: 25px;
  background-color: black;
  color: white;
  padding: 2px 12px;

  font-size: 0.6rem;
  font-weight: 600;
`;

const Actions = styled.div`
  position: fixed;
  bottom: 30px;
  right: 40px;
  border: 1px solid lightgrey;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  border-radius: 25px;

  background-color: white;
  box-shadow: -4px -4px 100px 10px rgba(0, 0, 0, 0.1);
`;

const Icon = styled(IconButton)<{ fontColor?: string }>`
  padding: 6px;
  color: ${p => p.fontColor} !important;
`;

const assignedPlanogram = {
  id: 1,
  coil_count: 6,
  shelves: [
    {
      id: 1,
      planogram_id: 1,
      height: 1,
      coils: [
        {
          id: 1,
          coil_no: 22,
          product: {
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
      planogram_id: 1,
      height: 2,
      coils: [
        {
          id: 5,
          coil_no: 32,
          product: {
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
      planogram_id: 1,
      height: 3,
      coils: [
        {
          id: 9,
          coil_no: 42,
          product: {
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
      planogram_id: 1,
      height: 1,
      coils: [
        {
          id: 1,
          coil_no: 22,
          product: {
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
      planogram_id: 1,
      height: 1,
      coils: [
        {
          id: 1,
          coil_no: 22,
          product: {
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
      planogram_id: 1,
      height: 1,
      coils: [
        {
          id: 1,
          coil_no: 22,
          product: {
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

const Planogram = () => {
  // const { data = {}, loading = true } = useQuery(QUERY_LEADS);
  // const leads = data?.leads?.leads ?? [];

  // TODO: add an edit icon to the products in the machine when hovered. When clicked, open a modal to edit the price, par level, etc

  const machine = {
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
    planogram_id: 1,
    planogram: assignedPlanogram, // use this one to do the diff and calculate the changes and restock instructions
    restock: {
      planogram: {
        id: 2,
        coil_count: 6,
        shelves: [
          {
            id: 1,
            planogram_id: 1,
            height: 1,
            coils: [
              {
                id: 1,
                coil_no: 22,
                product: {
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
            planogram_id: 1,
            height: 2,
            coils: [
              {
                id: 5,
                coil_no: 32,
                product: {
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
            planogram_id: 1,
            height: 3,
            coils: [
              {
                id: 9,
                coil_no: 42,
                product: {
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
            planogram_id: 1,
            height: 1,
            coils: [
              {
                id: 1,
                coil_no: 22,
                product: {
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
            planogram_id: 1,
            height: 1,
            coils: [
              {
                id: 1,
                coil_no: 22,
                product: {
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
            planogram_id: 1,
            height: 1,
            coils: [
              {
                id: 1,
                coil_no: 22,
                product: {
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
      },
    },
  };

  const products = [
    {
      id: 1,
      title: 'Red Rock Deli',
      label: 'Sweet Chilli & Sour Cream',
      image_url:
        'https://vendobox-documents.s3.ap-southeast-2.amazonaws.com/local/58c68a0f-f6ef-4b6b-b4a0-f10a3d874e09.png',
      default_price: 180,
      cost: 100,
    },
    {
      id: 2,
      title: 'Suntory',
      label: 'BOSS - Iced Latte',
      image_url:
        'https://vendobox-documents.s3.ap-southeast-2.amazonaws.com/local/afe240bf-bf3d-4259-9a8e-70d85ca6dd9c.png',
      default_price: 180,
      cost: 100,
    },
    {
      id: 3,
      title: 'Suntory',
      label: 'BOSS - Iced Long Black',
      image_url:
        'https://vendobox-documents.s3.ap-southeast-2.amazonaws.com/local/262660dd-bd5d-456f-b0cb-7c058629bc7b.png',
      default_price: 180,
      cost: 100,
    },
    {
      id: 4,
      title: 'Red Rock Deli',
      label: 'Sweet Chilli & Sour Cream',
      image_url:
        'https://vendobox-documents.s3.ap-southeast-2.amazonaws.com/local/58c68a0f-f6ef-4b6b-b4a0-f10a3d874e09.png',
      default_price: 180,
      cost: 100,
    },
    {
      id: 5,
      title: 'Suntory',
      label: 'BOSS - Iced Latte',
      image_url:
        'https://vendobox-documents.s3.ap-southeast-2.amazonaws.com/local/afe240bf-bf3d-4259-9a8e-70d85ca6dd9c.png',
      default_price: 180,
      cost: 100,
    },
    {
      id: 6,
      title: 'Suntory',
      label: 'BOSS - Iced Long Black',
      image_url:
        'https://vendobox-documents.s3.ap-southeast-2.amazonaws.com/local/262660dd-bd5d-456f-b0cb-7c058629bc7b.png',
      default_price: 180,
      cost: 100,
    },
    {
      id: 7,
      title: 'Red Rock Deli',
      label: 'Sweet Chilli & Sour Cream',
      image_url:
        'https://vendobox-documents.s3.ap-southeast-2.amazonaws.com/local/58c68a0f-f6ef-4b6b-b4a0-f10a3d874e09.png',
      default_price: 180,
      cost: 100,
    },
    {
      id: 8,
      title: 'Suntory',
      label: 'BOSS - Iced Latte',
      image_url:
        'https://vendobox-documents.s3.ap-southeast-2.amazonaws.com/local/afe240bf-bf3d-4259-9a8e-70d85ca6dd9c.png',
      default_price: 180,
      cost: 100,
    },
    {
      id: 9,
      title: 'Suntory',
      label: 'BOSS - Iced Long Black',
      image_url:
        'https://vendobox-documents.s3.ap-southeast-2.amazonaws.com/local/262660dd-bd5d-456f-b0cb-7c058629bc7b.png',
      default_price: 180,
      cost: 100,
    },
  ];

  const EmptyItem = ({
    coil_no,
    onDragEnter,
  }: {
    coil_no: number;
    onDragEnter: (e: any) => void;
  }) => (
    <Coil draggable onDragEnter={onDragEnter}>
      <CoilLabel>{coil_no}</CoilLabel>
      <MarginTop>
        <Small style={{ color: 'red' }}>
          <b>EMPTY</b>
        </Small>
      </MarginTop>
    </Coil>
  );

  const {
    place,
    location: { name },
  } = machine;

  const loading = false;
  const isMobile = useMediaQuery(breakpoints.phone);

  const dragItem = useRef<number>();
  const dragOverItem = useRef<{
    shelfNumber?: number | null;
    coilNumber?: number | null;
  }>({
    shelfNumber: null,
    coilNumber: null,
  });

  const defaultPlanogram = machine.restock.planogram ?? machine.planogram;

  const [workingPlanogram, setWorkingPlanogram] = useState(defaultPlanogram);

  // it will always start from the inventory..
  // this will always be just an index
  const dragStart = (e: any, index: number) => {
    dragItem.current = index;
    console.log(e.target.innerHTML);
  };

  const dragEnter = (e: any, shelfNumber: number, coilNumber: number) => {
    dragOverItem.current = {
      shelfNumber,
      coilNumber,
    };
    console.log(e.target.innerHTML);
  };

  const getFormattedContent = (
    id: number,
    coilNumber: number,
    dragItemContent: any
  ) => {
    return {
      id: id,
      coil_no: coilNumber,
      product: {
        title: dragItemContent.title,
        label: dragItemContent.label,
        image_url: dragItemContent.image_url,
        default_price: dragItemContent.default_price,
        cost: dragItemContent.cost,
      },
      price: 250,
    };
  };

  const drop = (e: any) => {
    console.log('dropped');
    if (!dragItem.current) return;

    console.log('i got here');
    const { shelfNumber, coilNumber } = dragOverItem.current;
    console.log({
      shelfNumber,
      coilNumber,
    });
    if (shelfNumber === undefined || coilNumber === undefined) return;
    if (shelfNumber === null || coilNumber === null) return;

    console.log('i got here 1');

    const tempPlanogram = { ...workingPlanogram };
    const dragItemContent = products[dragItem.current];

    console.log('shelf number: ', shelfNumber);
    const targetShelf = tempPlanogram.shelves[shelfNumber];
    console.log({ targetShelf });

    const targetCoil = targetShelf.coils[coilNumber];
    const formattedContent = getFormattedContent(
      targetCoil.id,
      targetCoil.coil_no,
      dragItemContent
    );
    console.log({ formattedContent });

    targetShelf.coils.splice(coilNumber, 1);
    targetShelf.coils.splice(coilNumber, 0, formattedContent);

    tempPlanogram.shelves.splice(shelfNumber, 1);
    tempPlanogram.shelves.splice(shelfNumber, 0, targetShelf);

    dragItem.current = undefined;
    dragOverItem.current = {
      shelfNumber: null,
      coilNumber: null,
    };

    setWorkingPlanogram(tempPlanogram);
  };

  return (
    <PageWrapper title={`${name}`}>
      <Grid container spacing={2} columns={12}>
        <Grid item xs={12}>
          <PageHeader
            title={name + (place ? ` - ${place}` : '')}
            subHeading="Manage machine next re-stock plan"
          />
        </Grid>

        <Grid item xs={8}>
          <MachineWrapper>
            {workingPlanogram.shelves.map((s, shelfIndex) => {
              return (
                <Shelf key={shelfIndex}>
                  {s.coils.map((c, coilIndex) => {
                    return (
                      <React.Fragment key={coilIndex}>
                        {!!c.product ? (
                          <Coil
                            draggable
                            onDragEnter={e =>
                              dragEnter(e, shelfIndex, coilIndex)
                            }
                          >
                            <CoilLabel>{c.coil_no}</CoilLabel>
                            <img
                              src={c.product.image_url}
                              alt={c.product.label}
                              height={100}
                              width={100}
                            />
                            <MarginTop>
                              <Small>{c.product.title}</Small>
                            </MarginTop>
                            <VerySmall>
                              <b>{c.product.label}</b>
                            </VerySmall>
                            ${round(c.product.default_price, 2) / 100}
                          </Coil>
                        ) : (
                          <EmptyItem
                            coil_no={c.coil_no}
                            onDragEnter={(e: any) =>
                              dragEnter(e, shelfIndex, coilIndex)
                            }
                          />
                        )}
                      </React.Fragment>
                    );
                  })}
                </Shelf>
              );
            })}
          </MachineWrapper>
        </Grid>

        <Grid item xs={4}>
          <Section border={false} title="Inventory">
            <SectionContainer>
              <MarginTop>
                <Grid container spacing={1} columns={12}>
                  {products.map((p, index) => {
                    return (
                      <Grid
                        item
                        xs={12}
                        sm={4}
                        key={index}
                        draggable
                        onDragStart={e => dragStart(e, index)}
                        onDragEnd={drop}
                      >
                        <ProductWrapper>
                          <img
                            src={p.image_url}
                            alt={p.label}
                            height={50}
                            width={50}
                          />
                          <MarginTop>
                            <Small>{p.label}</Small>
                          </MarginTop>
                          <VerySmall>
                            <b>{p.title}</b>
                          </VerySmall>
                        </ProductWrapper>
                      </Grid>
                    );
                  })}
                </Grid>
              </MarginTop>
            </SectionContainer>
          </Section>
        </Grid>
      </Grid>

      <Actions>
        <Icon
          aria-label="clear"
          id="long-button"
          onClick={() => setWorkingPlanogram(defaultPlanogram)}
          fontColor="red"
        >
          <ClearIcon />
        </Icon>
        <Icon
          aria-label="done"
          id="long-button"
          onClick={() => null}
          fontColor="green"
        >
          <DoneIcon />
        </Icon>
      </Actions>
    </PageWrapper>
  );
};

export default Planogram;
