import { gql } from '@apollo/client';

const QUERY_MACHINE = gql`
  query queryMachineById($id: IntID!) {
    machineById(id: $id) {
      id
      place
      location {
        name
        address {
          google_address
        }
        contact_first_name
        contact_last_name
        contact_phone
        contact_role
        notes
      }
      restocks {
        id
        status {
          code
          label
        }
        operator {
          first_name
          last_name
        }
        created_at
      }
    }
  }
`;

export { QUERY_MACHINE };
