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

import styled from 'styled-components';
import IconButton from '@mui/material/IconButton';
import DoneIcon from '@mui/icons-material/Done';
import ClearIcon from '@mui/icons-material/Clear';
// import EditIcon from '@mui/icons-material/Edit';

import MachineItem from './Components/MachineItem';

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

  display: flex;
  flex-direction: column;

  height: 100%;
  padding: 20px;
  overflow: auto;

  box-shadow: 1px 1px 2px #aaa;
`;

const Shelf = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const MarginTop = styled.div`
  margin-top: 6px;
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

const RedIcon = styled(IconButton)`
  padding: 6px;
  color: red !important;
`;

const GreenIcon = styled(IconButton)`
  padding: 6px;
  color: green !important;
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
      title: 'Sweet Chilli & Sour Cream',
      label: 'Red Rock Deli',
      image_url:
        'https://vendobox-documents.s3.ap-southeast-2.amazonaws.com/local/58c68a0f-f6ef-4b6b-b4a0-f10a3d874e09.png',
      default_price: 180,
      cost: 100,
    },
    {
      id: 2,
      title: 'BOSS - Iced Latte',
      label: 'Suntory',
      image_url:
        'https://vendobox-documents.s3.ap-southeast-2.amazonaws.com/local/afe240bf-bf3d-4259-9a8e-70d85ca6dd9c.png',
      default_price: 180,
      cost: 100,
    },
    {
      id: 3,
      title: 'BOSS - Iced Long Black',
      label: 'Suntory',
      image_url:
        'https://vendobox-documents.s3.ap-southeast-2.amazonaws.com/local/262660dd-bd5d-456f-b0cb-7c058629bc7b.png',
      default_price: 180,
      cost: 100,
    },
    {
      id: 4,
      title: 'Sweet Chilli & Sour Cream',
      label: 'Red Rock Deli',
      image_url:
        'https://vendobox-documents.s3.ap-southeast-2.amazonaws.com/local/58c68a0f-f6ef-4b6b-b4a0-f10a3d874e09.png',
      default_price: 180,
      cost: 100,
    },
    {
      id: 5,
      title: 'BOSS - Iced Latte',
      label: 'Suntory',
      image_url:
        'https://vendobox-documents.s3.ap-southeast-2.amazonaws.com/local/afe240bf-bf3d-4259-9a8e-70d85ca6dd9c.png',
      default_price: 180,
      cost: 100,
    },
    {
      id: 6,
      title: 'BOSS - Iced Long Black',
      label: 'Suntory',
      image_url:
        'https://vendobox-documents.s3.ap-southeast-2.amazonaws.com/local/262660dd-bd5d-456f-b0cb-7c058629bc7b.png',
      default_price: 180,
      cost: 100,
    },
    {
      id: 7,
      title: 'Sweet Chilli & Sour Cream',
      label: 'Red Rock Deli',
      image_url:
        'https://vendobox-documents.s3.ap-southeast-2.amazonaws.com/local/58c68a0f-f6ef-4b6b-b4a0-f10a3d874e09.png',
      default_price: 180,
      cost: 100,
    },
    {
      id: 8,
      title: 'BOSS - Iced Latte',
      label: 'Suntory',
      image_url:
        'https://vendobox-documents.s3.ap-southeast-2.amazonaws.com/local/afe240bf-bf3d-4259-9a8e-70d85ca6dd9c.png',
      default_price: 180,
      cost: 100,
    },
    {
      id: 9,
      title: 'BOSS - Iced Long Black',
      label: 'Suntory',
      image_url:
        'https://vendobox-documents.s3.ap-southeast-2.amazonaws.com/local/262660dd-bd5d-456f-b0cb-7c058629bc7b.png',
      default_price: 180,
      cost: 100,
    },
  ];

  const {
    place,
    location: { name },
  } = machine;

  // const loading = false;

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

  const [highlightedItem, setHighlightItem] = useState<{
    shelfNumber?: number | null;
    coilNumber?: number | null;
  }>({
    shelfNumber: null,
    coilNumber: null,
  });

  const dragStart = (index: number) => {
    dragItem.current = index;
  };

  const dragEnter = (shelfNumber: number, coilNumber: number) => {
    dragOverItem.current = {
      shelfNumber,
      coilNumber,
    };
    setHighlightItem({
      shelfNumber,
      coilNumber,
    });
  };

  const getFormattedContent = (
    id: number,
    coilNumber: number,
    dragItemContent: {
      title: string;
      label: string;
      image_url: string;
      default_price: number;
      cost: number;
    }
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

  const drop = () => {
    if (dragItem.current === undefined) return;

    const { shelfNumber, coilNumber } = dragOverItem.current;
    if (shelfNumber === undefined || coilNumber === undefined) return;
    if (shelfNumber === null || coilNumber === null) return;

    const tempPlanogram = { ...workingPlanogram };
    const dragItemContent = products[dragItem.current];

    const targetShelf = tempPlanogram.shelves[shelfNumber];

    const targetCoil = targetShelf.coils[coilNumber];
    const formattedContent = getFormattedContent(
      targetCoil.id,
      targetCoil.coil_no,
      dragItemContent
    );

    targetShelf.coils.splice(coilNumber, 1);
    targetShelf.coils.splice(coilNumber, 0, formattedContent);

    tempPlanogram.shelves.splice(shelfNumber, 1);
    tempPlanogram.shelves.splice(shelfNumber, 0, targetShelf);

    dragItem.current = undefined;
    dragOverItem.current = {
      shelfNumber: null,
      coilNumber: null,
    };
    setHighlightItem({
      shelfNumber: null,
      coilNumber: null,
    });

    setWorkingPlanogram(tempPlanogram);
  };

  const shouldHighlight = (shelfNumber: number, coilNumber: number) => {
    return (
      highlightedItem.coilNumber === coilNumber &&
      highlightedItem.shelfNumber === shelfNumber
    );
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
                      <div
                        draggable
                        onDragOver={e => {
                          e.preventDefault();
                        }}
                        onDragEnter={() => dragEnter(shelfIndex, coilIndex)}
                        onDragLeave={(e: React.DragEvent<HTMLDivElement>) => {
                          if (e.currentTarget.contains(e.relatedTarget as Node))
                            return;
                          dragOverItem.current = {
                            shelfNumber: null,
                            coilNumber: null,
                          };
                          setHighlightItem({
                            shelfNumber: null,
                            coilNumber: null,
                          });
                        }}
                        onDrop={drop}
                        style={{
                          width: '100%',
                          overflow: 'auto',
                        }}
                        key={coilIndex}
                      >
                        <MachineItem
                          highlight={shouldHighlight(shelfIndex, coilIndex)}
                          coil={c}
                        />
                      </div>
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
                        onDragStart={() => dragStart(index)}
                      >
                        <MachineItem
                          image_size={50}
                          coil={{
                            product: p,
                          }}
                        />
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
        <RedIcon
          aria-label="clear"
          id="long-button"
          onClick={() => setWorkingPlanogram(defaultPlanogram)}
        >
          <ClearIcon />
        </RedIcon>
        <GreenIcon aria-label="done" id="long-button" onClick={() => null}>
          <DoneIcon />
        </GreenIcon>
      </Actions>
    </PageWrapper>
  );
};

export default Planogram;
