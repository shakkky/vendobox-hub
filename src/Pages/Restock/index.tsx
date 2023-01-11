import React, { useEffect } from 'react';
// import { gql, useQuery } from '@apollo/client';
import PageHeader from 'Components/PageHeader';
import { PageWrapper } from 'Components/Page';
// import ReStockPlanner from 'Components/Stock/Tester';
import { Planner } from 'Components';
import { Grid } from '@mui/material';

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
  stock_plan_id: 1,
  stock_plan: assignedPlanogram, // use this one to do the diff and calculate the changes and restock instructions
  restock: {
    stock_plan: {
      id: 2,
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
    },
  },
};

const Restock = () => {
  // const { data = {}, loading = true } = useQuery(QUERY_LEADS);
  // const leads = data?.leads?.leads ?? [];

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
    restock: { stock_plan: restockPlan },
    stock_plan: currentPlan,
  } = machine;

  // const loading = false;

  return (
    <PageWrapper title={`${name}`}>
      <Grid container spacing={2} columns={12}>
        <Grid item xs={12}>
          <PageHeader
            title={name + (place ? ` - ${place}` : '')}
            subHeading="Manage machine stock plan"
          />
        </Grid>
        <Grid item xs={12}>
          <Planner
            initial={{ ...restockPlan }}
            currentPlan={currentPlan}
            inventory={products}
          />
        </Grid>
      </Grid>
    </PageWrapper>
  );
};

export default Restock;
