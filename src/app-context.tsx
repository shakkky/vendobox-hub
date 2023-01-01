import { ApolloError } from '@apollo/client';
import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export type Context = {
  apiErrors: ApolloError | null;
  notificationMessages: string[];
  pageAlertMessages: {
    message: string;
    type: string;
  }[];
  setApiError: (error: ApolloError) => void;
  resetApiError: () => void;
  setNotificationMessage: (message: string, timeoutSeconds?: number) => void;
  sendPageAlert: (message: string, type?: string) => void;
  clearPageAlert: () => void;
};

export const AppContext = React.createContext<Context>({
  apiErrors: null,
  notificationMessages: [],
  pageAlertMessages: [],
  setApiError: () => {
    // do nothing
  },
  resetApiError: () => {
    // do nothing
  },
  setNotificationMessage: () => {
    // do nothing
  },
  sendPageAlert: () => {
    // do nothing
  },
  clearPageAlert: () => {
    // do nothing
  },
});

export const useAppContext = (): Context => useContext(AppContext);

export const APIErrorReset = (): null => {
  const appContext = useAppContext();
  const history = useHistory();

  const { resetApiError } = appContext ?? {};

  useEffect(() => {
    resetApiError();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [history?.location?.pathname]);
  return null;
};

export const useHasErrorOrNotification = (): boolean => {
  const appContext = useContext(AppContext);
  const { apiErrors, notificationMessages } = appContext ?? {};
  if (notificationMessages.length) return true;
  return (
    !!apiErrors?.graphQLErrors ||
    !!apiErrors?.networkError ||
    !!notificationMessages.length
  );
};

type ProviderProps = { children: React.ReactNode } & Context;

export const AppContextProvider = ({ children, ...props }: ProviderProps) => {
  return <AppContext.Provider value={props}>{children}</AppContext.Provider>;
};
