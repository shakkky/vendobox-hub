import React, { useEffect } from 'react';
import { gql, useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

import PageHeader from 'Components/PageHeader';
import { PageWrapper } from 'Components/Page';
// import ReStockPlanner from 'Components/Stock/Tester';
import { Planner } from 'Components';
import { Grid } from '@mui/material';

// import { queryLeads_leads_leads } from 'schema/queryLeads';

const PAGE_QUERY = gql`
  query queryRestockAndInventory($id: IntID!) {
    restock(id: $id) {
      id
      stock_plan {
        id
        shelves {
          id
          shelf_no
          coils {
            id
            coil_no
            product {
              id
              title
              label
              image_url
              default_price
            }
            price
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

// TODO: Pull this data from the api

const Restock = () => {
  const { id } = useParams<{ id: string }>();
  // TODO: add loading spinner
  // const { data = {}, loading = true } = useQuery(QUERY_PRODUCTS);
  const { data = {} } = useQuery(PAGE_QUERY, {
    variables: {
      id,
    },
  });
  const products = data?.products?.products ?? [];

  const {
    place,
    location: { name },
    restock: { stock_plan: restockPlan },
    stock_plan: currentPlan,
  } = machine;

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
            onSaveCallback={() => null}
          />
        </Grid>
      </Grid>
    </PageWrapper>
  );
};

export default Restock;
