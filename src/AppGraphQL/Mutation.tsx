import React, { useCallback } from 'react';
import { Mutation as ApolloMutation } from '@apollo/client/react/components';

import { useAppContext } from '../app-context';
import ErrorHandler from './ErrorHandler';
import { ApolloError, MutationFunction, MutationResult } from '@apollo/client';
import { MutationComponentOptions } from '@apollo/client/react/components';

export default function Mutation<T>(
  props: MutationComponentOptions
): JSX.Element {
  const { setApiError } = useAppContext();
  const { onError: onErrorFromProps, children } = props;
  const onError = useCallback(
    (e: ApolloError) => {
      console.error('GQL Mutation Error', e); // eslint-disable-line
      if (setApiError) setApiError(e);
      if (onErrorFromProps) onErrorFromProps(e);
    },
    [setApiError, onErrorFromProps]
  );

  return (
    <ApolloMutation {...props} onError={onError}>
      {(mutate: MutationFunction<T>, result: MutationResult<T>) => (
        <ErrorHandler isMutation result={result} mutate={mutate}>
          {children}
        </ErrorHandler>
      )}
    </ApolloMutation>
  );
}
