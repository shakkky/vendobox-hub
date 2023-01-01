import React, { useContext } from 'react';
import { AppContext } from '../app-context';

export const withNotification = (
  Component: React.FunctionComponent<{ [x: string]: unknown }>
) => {
  const NotificationWrapper = (props: Record<string, unknown>) => {
    return (
      <AppContext.Consumer>
        {({
          setNotificationMessage,
          notificationMessages,
          sendPageAlert,
          clearPageAlert,
          pageAlertMessages,
        }) => (
          <Component
            {...props}
            setNotificationMessage={setNotificationMessage}
            notificationMessages={notificationMessages}
            sendPageAlert={sendPageAlert}
            clearPageAlert={clearPageAlert}
            pageAlertMessages={pageAlertMessages}
          />
        )}
      </AppContext.Consumer>
    );
  };
  return NotificationWrapper;
};

export const useNotification = () => useContext(AppContext);
