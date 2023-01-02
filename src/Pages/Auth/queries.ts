import { gql } from '@apollo/client';

const LOGIN_MUTATION = gql`
  mutation login($credentials: CredentialsInput!) {
    authUser: login(credentials: $credentials) {
      id
      first_name
      last_name
      email
      role {
        code
        label
      }
      photo
      phone
      created_at
      updated_at
      apiToken
    }
  }
`;

export { LOGIN_MUTATION };
