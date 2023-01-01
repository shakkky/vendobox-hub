import React, { Fragment } from 'react';

import Tooltip from './Tooltip';
import Badge from './Badge';

const getType = (label: string): string => {
  if (label.includes('$')) return 'outline';

  switch (label) {
    case 'APPROVED':
    case 'ACCEPTED TERMS':
    case 'JOINED':
      return 'plain';
    default:
      return 'outline';
  }
};

const getColor = (label: string): string => {
  if (label.includes('$')) return 'dark';

  switch (label) {
    case 'APPROVED':
      return 'primary';
    case 'ACCEPTED TERMS':
      return 'success';
    case 'NOT ACCEPTED TERMS':
    case 'DELETED':
      return 'danger';
    default:
      return 'primary';
  }
};

const StatusBadge = ({
  label,
  tooltip = false,
  title,
  color: colorProp,
  outline,
  ...props
}: {
  label: string;
  outline?: boolean;
  tooltip?: boolean;
  color?: string;
  title?: string;
}): JSX.Element | null => {
  if (!label) return null;

  const upper = label.toUpperCase();
  const test = upper.replace(/\(.*\)/, '').trim();
  const type = getType(test);
  const color = colorProp ?? getColor(test);

  const Wrapper = tooltip ? Tooltip : Fragment;
  const wrapperProps: Record<string, unknown> = {};
  if (tooltip) wrapperProps.title = tooltip;

  return (
    <Wrapper {...wrapperProps}>
      <Badge
        color={color}
        outline={outline ?? type === 'outline'}
        title={title}
        {...props}
      >
        {upper}
      </Badge>
    </Wrapper>
  );
};

StatusBadge.defaultProp = {
  label: '',
};

export default StatusBadge;
