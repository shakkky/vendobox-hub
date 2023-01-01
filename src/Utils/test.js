import { MockedProvider } from '@apollo/client/testing';
import { BrowserRouter } from 'react-router-dom';
import { ThemedApp } from '../styles';

/**
 * Component Wrapper for testing individual components
 * By default includes ThemedApp
 * @param includeRouter mock react-router
 * @param includeProvider mock Apollo client
 * @param providerMocks  mock Apollo queries and mutations for MockedProvider (ApolloProvider)
 */
export const TestWrapper = ({
  children,
  includeRouter = false,
  includeProvider = false,
  providerMocks = [],
}) => {
  if (includeRouter && includeProvider)
    return (
      <MockedProvider mocks={providerMocks} addTypename={false}>
        <ThemedApp>
          <BrowserRouter>{children}</BrowserRouter>
        </ThemedApp>
      </MockedProvider>
    );
  if (includeRouter)
    return (
      <ThemedApp>
        <BrowserRouter>{children}</BrowserRouter>
      </ThemedApp>
    );
  if (includeProvider)
    return (
      <MockedProvider mocks={providerMocks} addTypename={false}>
        <ThemedApp>{children}</ThemedApp>
      </MockedProvider>
    );
  return <ThemedApp>{children}</ThemedApp>;
};
