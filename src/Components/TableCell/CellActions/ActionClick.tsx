import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';

import { Tooltip } from 'Components';
import colors from 'styles/colors';

import { ActionClickWrapper as Wrapper, ActionIcon as Icon } from './styles';

const ActionClick = ({
  title,
  icon,
  iconColor,
  link,
  ...props
}: {
  title?: string;
  icon?: string;
  iconColor?: string;
  link?: string;
  onClick?: () => void;
  color?: keyof typeof colors;
  disabled?: boolean;
}): JSX.Element => {
  const TooltipEl = title ? Tooltip : Fragment;
  const el = (
    <Wrapper {...props}>
      <TooltipEl title={title}>
        {icon && <Icon type={icon} color={iconColor} />}
      </TooltipEl>
    </Wrapper>
  );

  if (!link) return el;
  return <RouterLink to={link}>{el}</RouterLink>;
};

ActionClick.propTypes = {
  icon: PropTypes.string,
  iconColor: PropTypes.string,
};

ActionClick.defaultProps = {
  icon: '',
  iconColor: 'primary',
};

export default ActionClick;
