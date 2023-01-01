import React from 'react';
import { Wrapper } from './styles';

function AppNotificationBar({
  message,
}: {
  message: string | React.ReactNode;
}) {
  if (!message) return null;
  return <Wrapper>{message}</Wrapper>;
}

AppNotificationBar.defaultProps = {
  message: null,
};

export default React.memo(AppNotificationBar);
