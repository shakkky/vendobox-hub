import { gql } from '@apollo/client';

const QUERY_LEADS = gql`
  query queryLeads {
    leads {
      leads {
        id
        name
        phone
        email
        company_name
        est_traffic
        machine_type
        notes
        status {
          code
          label
        }
        interaction_key
        created_at
      }
    }
  }
`;

export { QUERY_LEADS };
