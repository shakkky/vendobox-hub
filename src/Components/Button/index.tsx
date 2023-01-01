import React from 'react';
import PropTypes, { Validator } from 'prop-types';
import { ButtonWrapper, Icon } from './styles';
import Tooltip from 'Components/Tooltip';
import styledComponentTheme from 'styles/styled-component-theme';
import styled from 'styled-components';

const Wrapper = styled.div<{
  outline?: boolean;
  children?: React.ReactNode | string;
  iconSize?: string;
  color?: keyof typeof styledComponentTheme['button'];
}>`
  color: ${props =>
    props.outline
      ? props.color
        ? props.theme.button[props.color]
        : props.theme.colors.white
      : props.theme.colors.white}
  display: inline-block;
  border-radius: 5px;
  padding: ${props => (props?.iconSize === 'sm' ? '1px 4px' : '5px 6px')};
  margin-left: ${props => (props?.iconSize === 'sm' ? '1px' : '4px')};
  margin-right: ${props => (props?.iconSize === 'sm' ? '1px' : '4px')};
  align-items: center;
`;

// define button component
const Button = ({
  label,
  icon,
  title,
  size,
  color,
  disabled,
  outline,
  onClick,
  type,
  href,
  tooltipTitle,
  ...otherProps
}: {
  label: string;
  icon?: string;
  title?: string;
  size?: 'sm' | 'md';
  color?: keyof typeof styledComponentTheme['button'];
  disabled?: boolean;
  outline?: boolean;
  onClick?: ((e: React.MouseEvent<HTMLButtonElement>) => void) | (() => void);
  type?: string;
  href?: string;
  tooltipTitle?: string;
}): JSX.Element => (
  <ButtonWrapper
    type={type ? type : 'button'}
    label={label}
    icon={icon}
    size={size}
    color={color}
    disabled={disabled}
    outline={outline}
    onClick={onClick}
    href={href}
    title={title}
    className={outline ? 'btn-outline' : ''}
    {...otherProps}
  >
    {icon && (
      <Wrapper outline={outline} color={color} iconSize={size}>
        <Icon colortype={color} type={icon} size={size} />
      </Wrapper>
    )}
    {label && !tooltipTitle && <span className="label">{label}</span>}
    {label && tooltipTitle && <Tooltip title={tooltipTitle}>{label}</Tooltip>}
  </ButtonWrapper>
);

Button.propTypes = {
  onClick: PropTypes.func,
  title: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  disabled: PropTypes.bool,
  outline: PropTypes.bool,
  color: PropTypes.oneOf([
    'primary',
    'secondary',
    'danger',
    'hold',
    'regentGrey',
    'warning',
  ]),
  // icon: (props, propName, componentName) => {
  //   if (!props.label && !props.icon) {
  //     return new Error(
  //       `One of props 'icon' or 'label' was not specified in '${componentName}'.`
  //     );
  //   }
  // },
  label: ((props, _propName, componentName) => {
    if (!props.label && !props.icon) {
      return new Error(
        `One of props 'icon' or 'label' was not specified in '${componentName}'.`
      );
    }
  }) as Validator<unknown>,
  tooltipTitle: PropTypes.string,
};

Button.defaultProps = {
  // label: null,
  title: null,
  // icon: null,
  color: 'primary',
  size: 'md',
  tooltipTitle: '',
};

export default Button;
