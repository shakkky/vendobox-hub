import React, { useCallback } from 'react';
import { QueryResult, ApolloError } from '@apollo/client';
import {
  Query as ApolloQuery,
  QueryComponentOptions,
} from '@apollo/client/react/components';

import { useAppContext } from '../app-context';
import ErrorHandler from './ErrorHandler';

export default function Query<T>(props: QueryComponentOptions): JSX.Element {
  const { setApiError } = useAppContext();
  const { onError: onErrorFromProps, children } = props;
  const onError = useCallback(
    (e: ApolloError) => {
    console.error('GQL Query Error', e); // eslint-disable-line
      if (setApiError) setApiError(e);
      if (onErrorFromProps) onErrorFromProps(e);
    },
    [setApiError, onErrorFromProps]
  );

  return (
    <ApolloQuery {...props} onError={onError}>
      {(result: QueryResult<T>) => (
        <ErrorHandler result={result}>{children}</ErrorHandler>
      )}
    </ApolloQuery>
  );
}
