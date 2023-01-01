import styled from 'styled-components';
import { Button } from 'reactstrap';
import { Color } from '../../styles/colors';
import IconComponent from '../Icon';

const ButtonWrapper = styled(Button)`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-family: ${p => p.theme.fonts.heavy};
  letter-spacing: 0.42px;
  padding: 8px 30px;
  color: white;
  appearance: none !important;
  ${props => {
    let buttonCss = `background: ${props.theme.button[props.color]};
    border-color: ${props.theme.button[props.color]};`;

    if (props.marginLeft) {
      buttonCss += `margin-left:${props.marginLeft}px;`;
    }

    if (props.size === 'sm') {
      buttonCss += `padding: 4px 14px;
      font-size: 10px;
      line-height: 17px;
      height: 24px;
      `;
    }
    if (props.icon) {
      buttonCss += `padding: 3px 20px 3px 0 ;`;
    }
    if (props.icon && props.size === 'sm') {
      buttonCss += `padding: 0  20px 0  0 ;
      height: 24px;
      line-height: 18px;`;
    }
    if (props.disabled) {
      buttonCss += `opacity: 0.3 !important;`;
    }
    if (props.outline) {
      buttonCss += `background: white;
      font-weight: 600;
      color: ${props.theme.button[props.color]};
      border-color: ${props.theme.button[props.color]};
      &:active{
        background-color: white !important;
        color: ${props.theme.button[props.color]} !important;
      }`;
    }
    if (props.outline && props.size === 'sm') {
      buttonCss += `font-weight: 500;`;
    }
    if (props.outline && props.disabled) {
      buttonCss += `background-color: white !important;`;
    }
    return buttonCss;
  }} &:focus {
    box-shadow: 0 0 0 0.2rem
      ${props => Color(props.theme.button[props.color]).fade(0.8).string()};
  }
  &:hover {
    ${props => {
      if (props.outline) {
        return `background: ${Color(props.theme.button[props.color])
          .fade(0.9)
          .string()};
          color: ${props.theme.button[props.color]}`;
      } else if (!props.disabled) {
        return `background: ${Color(props.theme.button[props.color])
          .mix(Color('black'), 0.2)
          .string()};
        border-color: ${Color(props.theme.button[props.color])
          .mix(Color('black'), 0.2)
          .string()};`;
      }
    }};
  }
`;

const iconSizes = {
  sm: 12,
  md: 20,
};

const Icon = styled(IconComponent)`
  font-size: ${({ size }) => `${iconSizes[size] ?? 21}px`};
  position: relative;
  top: -1;
`;

export { ButtonWrapper, Icon };
