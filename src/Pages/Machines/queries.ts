import { gql } from '@apollo/client';

const QUERY_MACHINES = gql`
  query queryMachines {
    machines {
      machines {
        id
        place
        location {
          id
          name
          address {
            google_address
          }
        }
        status {
          code
          label
        }
        warning
        next_restock {
          operator {
            first_name
            last_name
          }
        }
        revenue {
          today
          yesterday
          week
          month
          since_restock
        }
      }
    }
  }
`;

export { QUERY_MACHINES };
