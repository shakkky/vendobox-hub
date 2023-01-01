import React from 'react';

import { useNotification } from 'HOC';
import PageAlertBanner from 'Components/PageAlertBanner';

function Alerts() {
  const { pageAlertMessages, clearPageAlert } = useNotification();
  return pageAlertMessages.map(msg => (
    <PageAlertBanner key={msg.message} {...msg} handleClose={clearPageAlert} />
  ));
}

export default React.memo(Alerts);
