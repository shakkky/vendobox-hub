import React from 'react';
import { Tooltip as TooltipMui } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  title: {
    whiteSpace: ({ prelineWhiteSpace }: { prelineWhiteSpace?: boolean }) => {
      if (!prelineWhiteSpace) return 'normal';
      return 'pre-line';
    },
  },
  tooltip: {
    fontSize: theme.typography.pxToRem(13),
  },
}));

function Tooltip({
  title,
  children,
  prelineWhiteSpace,
}: {
  title?: string;
  children?: React.ReactNode;
  prelineWhiteSpace?: boolean;
}): JSX.Element {
  const classes = useStyles({ prelineWhiteSpace });
  return (
    <TooltipMui
      title={title ? <span className={classes.title}>{title}</span> : ''}
      classes={{
        tooltip: classes.tooltip,
      }}
      arrow
    >
      <span>{children}</span>
    </TooltipMui>
  );
}

export default Tooltip;
