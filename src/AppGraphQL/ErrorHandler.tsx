import { MutationResult, MutationFunction, QueryResult } from '@apollo/client';
import {
  QueryComponentOptions,
  MutationComponentOptions,
} from '@apollo/client/react/components';

function ErrorHandler<T>({
  children,
  result,
  mutate,
  isMutation = false,
}: {
  children:
    | QueryComponentOptions['children']
    | MutationComponentOptions['children'];
  result: QueryResult<T> | MutationResult<T>;
  mutate?: Maybe<MutationFunction<T>>;
  isMutation?: boolean;
}): JSX.Element | null {
  return render(children, result, mutate);
}

const isMutationComponent = <T extends unknown>(
  x: QueryComponentOptions['children'] | MutationComponentOptions['children'],
  mutate?: Maybe<MutationFunction<T>>
): x is MutationComponentOptions['children'] =>
  mutate !== undefined && mutate !== null;

function render<T>(
  children:
    | QueryComponentOptions['children']
    | MutationComponentOptions['children'],
  result: QueryResult<T> | MutationResult<T>,
  mutate?: Maybe<MutationFunction<T>>
): JSX.Element | null {
  const resultWithBackupData = {
    ...result,
    data: result.data ?? {},
  } as QueryResult<T> | MutationResult<T>;
  if (isMutationComponent(children, mutate)) {
    if (mutate === undefined || mutate === null) return null;
    return children(mutate, resultWithBackupData as MutationResult<T>);
  }
  return children(resultWithBackupData as QueryResult<T>);
}

ErrorHandler.defaultProps = {
  isMutation: false,
  mutate: null,
};

export default ErrorHandler;
