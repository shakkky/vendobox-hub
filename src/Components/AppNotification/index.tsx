import React from 'react';
import AppNotificationBar from '../AppNotificationBar';

import { useNotification } from '../../HOC';

function MessageContext() {
  const { notificationMessages } = useNotification();
  if (!notificationMessages?.length) return null;
  return (
    <>
      {notificationMessages.map(msg => (
        <AppNotificationBar key={msg} message={msg} />
      ))}
    </>
  );
}

export default React.memo(MessageContext);
