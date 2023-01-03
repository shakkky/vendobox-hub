import React from 'react';
import Loadable from 'react-loadable';
import {
  Switch,
  Route,
  BrowserRouter,
  Redirect,
  useLocation,
  RouteProps,
} from 'react-router-dom';
import { QueryParamProvider } from 'use-query-params';

import { APIErrorReset } from 'app-context';
import { getUserSession } from './helper';
import { withLayout } from './Layout';

import { Login, NotFound, Dashboard, Leads } from './route-components';

type Props = { [x: string]: unknown };

function LoginRedirect() {
  const { pathname } = useLocation();
  return (
    <Redirect
      to={{
        pathname: `/login`,
        search: `?redirectTo=${pathname}`,
        state: { redirectTo: pathname },
      }}
    />
  );
}

function AuthRoute({
  check = () => !!getUserSession(),
  component: Component,
  ...rest
}: {
  check?: () => boolean;
  component: React.ComponentType<Props> & Loadable.LoadableComponent;
} & Omit<RouteProps, 'component'>) {
  return (
    <Route
      {...rest}
      render={() => (check() ? withLayout(<Component />) : <LoginRedirect />)}
    />
  );
}

// used later
// function RedirectToDashboardRoute({
//   check = () => !!getUserSession(),
//   component: Component,
//   getComponent,
//   authCheck = false,
//   ...rest
// }: {
//   check?: () => boolean;
//   component?: React.ComponentType<Props> & Loadable.LoadableComponent;
//   getComponent?: () => React.ComponentType<Props> & Loadable.LoadableComponent;
//   authCheck?: boolean;
// } & RouteProps) {
//   return (
//     <Route
//       {...rest}
//       render={() => {
//         if (authCheck) {
//           const isAuthed = !!getUserSession();
//           if (!isAuthed) {
//             return <LoginRedirect />;
//           }
//         }
//         if (!check()) return <Redirect to={{ pathname: '/' }} />;
//         const ComponentToUse = getComponent ? getComponent() : Component;
//         if (!ComponentToUse) {
//           throw new Error('No component found to render route');
//         }
//         return withLayout(<ComponentToUse />);
//       }}
//     />
//   );
// }

// const RoleRoute = (
//   ...rolePredicates: ((user: login_authUser) => boolean)[]
// ) => {
//   const RoleRouteComponent = (props: Props) => {
//     return (
//       <RedirectToDashboardRoute
//         {...props}
//         check={() => {
//           const user = getUserSession();
//           return (
//             !!user &&
//             rolePredicates.some(predicate => predicate(user as login_authUser))
//           );
//         }}
//       />
//     );
//   };
//   return RoleRouteComponent;
// };

const PublicLoggedOutRoute = (props: Props) => {
  const user = getUserSession();
  return !user ? (
    <Route {...props} />
  ) : (
    <Redirect
      to={{
        pathname: '/',
        state: { from: props.location },
      }}
    />
  );
};

const Routes = () => (
  <BrowserRouter>
    <APIErrorReset />
    <QueryParamProvider ReactRouterRoute={Route}>
      <Switch>
        <PublicLoggedOutRoute exact path="/login" component={Login} />

        <AuthRoute exact path="/" component={Dashboard} />
        <AuthRoute exact path="/leads" component={Leads} />

        {/* <AuthRoute exact path="/resumes" component={Resumes} />
        <AuthRoute exact path="/users" component={Users} /> */}

        <AuthRoute component={NotFound} />
      </Switch>
    </QueryParamProvider>
  </BrowserRouter>
);

export default React.memo(Routes, () => true);
