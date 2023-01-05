import React from 'react';
import Loadable from 'react-loadable';
import { PageLoader } from 'Components/Loader';

type Props = { [x: string]: unknown };

const LoadingComponent = ({ error }: { error: Error }) => {
  if (error) return <div>{error.message}</div>;
  return <PageLoader />;
};

const LoadComponent = (
  loader: () => Promise<
    React.ComponentType<Props> | { default: React.ComponentType<Props> }
  >
) =>
  Loadable<Props, React.ComponentType<unknown>>({
    loader,
    loading: LoadingComponent,
  });

export const Login = LoadComponent(() => import('./Pages/Auth/Login'));
export const NotFound = LoadComponent(() => import('./Pages/NotFound'));

export const Dashboard = LoadComponent(() => import('./Pages/Dashboard'));
export const Leads = LoadComponent(() => import('./Pages/Leads'));
export const Locations = LoadComponent(() => import('./Pages/Locations'));
export const Machines = LoadComponent(() => import('./Pages/Machines'));
