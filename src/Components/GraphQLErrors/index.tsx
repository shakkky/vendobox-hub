import { Wrapper } from './styles';
import { ApolloError } from '@apollo/client';

const GraphQLErrors = ({ errors }: { errors: ApolloError }) => {
  const { graphQLErrors, networkError } = errors;

  return (
    <Wrapper>
      {graphQLErrors.length > 0 && (
        <>
          <span>GraphQL Errors:</span>
          <ul>
            {graphQLErrors.map(({ message }, i) => (
              <li key={i}>{message}</li>
            ))}
          </ul>
        </>
      )}
      {networkError && (
        <>
          <span>GraphQL Network Errors:</span>
          <ul>
            <li>{networkError.message}</li>
          </ul>
        </>
      )}
    </Wrapper>
  );
};

export default GraphQLErrors;
