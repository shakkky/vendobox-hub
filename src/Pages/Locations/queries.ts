import { gql } from '@apollo/client';

const QUERY_LOCATIONS = gql`
  query queryLocations {
    locations {
      locations {
        id
        name
        image_url
        address {
          google_address
        }
        seven_day_revenue
        all_time_revenue
        next_restock {
          operator {
            first_name
            last_name
          }
        }
        created_at
      }
    }
  }
`;

export { QUERY_LOCATIONS };
