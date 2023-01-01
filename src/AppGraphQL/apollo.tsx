import React from 'react';
import { get } from 'lodash';
import { GraphQLError } from 'graphql';
import {
  ApolloError,
  ApolloClient,
  HttpLink,
  ApolloLink,
  InMemoryCache,
  NormalizedCacheObject,
  ApolloQueryResult,
} from '@apollo/client';

import config from '../config';
import possibleTypes from './possibleTypes.json';

const uri = config.api;

const middlewareAuthLink = new ApolloLink((operation, forward) => {
  const userFromStorage = localStorage.getItem('user');
  const user = userFromStorage ? JSON.parse(userFromStorage) : null;
  const token = user?.apiToken ?? null;
  operation.setContext(({ headers }: { headers: Record<string, string> }) => ({
    headers: { ...headers, 'x-api-token': token },
  }));
  return forward(operation);
});

const middlewareDetect401Link = new ApolloLink((operation, forward) => {
  return forward(operation).map(response => {
    const errorMessage = get(response, 'errors.0.message');

    if (errorMessage === 'User is not authenticated') {
      localStorage.removeItem('user');
      window.location.href = `/login?redirectTo=${document.location.pathname}`;
      return {};
    }

    return response;
  });
});

const httpLink = new HttpLink({ uri });
const cache = new InMemoryCache({
  possibleTypes,
});
const link = ApolloLink.from([
  middlewareAuthLink,
  middlewareDetect401Link,
  httpLink,
]);

let client: ApolloClient<NormalizedCacheObject>;
const init = () => {
  if (client) return client;
  client = new ApolloClient({
    uri,
    link,
    cache,
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'cache-and-network',
        errorPolicy: 'none', // because we are using Apollo 1.0
      },
      query: {
        fetchPolicy: 'network-only',
        errorPolicy: 'none', // because we are using Apollo 1.0
      },
      mutate: {
        errorPolicy: 'none', // because we are using Apollo 1.0
      },
    },
  });
  return client;
};

const isArrayOfErrors = (
  e:
    | ApolloError
    | GraphQLError
    | readonly ApolloError[]
    | readonly GraphQLError[]
): e is readonly ApolloError[] | readonly GraphQLError[] => Array.isArray(e);

const isApolloError = (x: ApolloError | GraphQLError): x is ApolloError =>
  Object.prototype.hasOwnProperty.call(x, 'graphQLErrors');

const formatErrors = (
  response: Maybe<ApolloQueryResult<unknown>>,
  error:
    | undefined
    | null
    | ApolloError
    | GraphQLError
    | readonly ApolloError[]
    | readonly GraphQLError[]
): string => {
  if (error === undefined || error === null) return '';
  if (isArrayOfErrors(error)) {
    return error.map(e => formatErrors(response, e)).join('\n');
  }
  let messages: string[] = [];

  // if graphql responded, then it means it validation errors
  if (response && response.errors) {
    messages = [...messages, ...response.errors.map(e => e.message)];
  }

  if (isApolloError(error)) {
    if (error && error.networkError) {
      messages = [...messages, error.networkError?.message ?? ''];
    }

    if (error && error.graphQLErrors) {
      messages = [
        ...messages,
        ...(error?.graphQLErrors ?? []).map(e =>
          e.extensions?.response?.body?.message
            ? `${e.message}: ${e.extensions.response.body.message}`
            : e.message
        ),
      ];
    }
  }

  // This is probably not a graphQL error so we'll just display the error.message if set
  if (messages.length === 0) {
    if (error && error.message) {
      messages = [...messages, error.message];
    }
  }

  return messages.join('\n');
};

const withApollo = (
  Component: React.FunctionComponent<{ [x: string]: unknown }>
): React.FunctionComponent<unknown> => {
  const WithApolloWrappedComponent = (
    props: Record<string, unknown>
  ): JSX.Element => {
    const client = init() as ApolloClient<NormalizedCacheObject> & {
      formatErrors: typeof formatErrors;
    };
    client.formatErrors = formatErrors;
    return <Component {...props} graphql={client} />;
  };
  return WithApolloWrappedComponent;
};

export default init();
export { withApollo, formatErrors };
