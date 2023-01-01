import styled from 'styled-components';
import {
  Radio,
  RadioGroup,
  FormLabel,
  FormControlLabel,
  FormLabelProps,
} from '@material-ui/core';

const Wrap = styled.div<{ inline?: boolean; centered?: boolean }>`
  display: ${props => (props.inline ? 'flex' : 'block')};

  ${p => {
    if (p.centered) {
      return `
        align-items: center;
        justify-content: center;
      `;
    }
  }};

  legend {
    font-size: 13px;
    line-height: 14px;
  }
`;

const FormLabelWrapper = styled(FormLabel)<
  {
    inline?: boolean;
    component?: string;
    compacted?: boolean;
  } & FormLabelProps
>`
  color: ${props => props.theme.palette.secondary.main} !important;
  max-width: ${props => (props.inline ? '289px' : 'auto')};
  text-align: ${props => (props.inline ? 'left' : 'auto')};
  margin: ${props => (props.inline ? '0' : '0 0 10px 0')};
  padding-right: 1rem;
  ${props => {
    if (props.compacted) {
      return `width: 70%; margin-left: 20px;`;
    }
  }}
`;

const FormControlLabelWrapper = styled(FormControlLabel)<{ inline?: boolean }>`
  color: ${props => props.theme.colors.darkGrey} !important;
  ${props => {
    if (!props.inline) return 'height: 2.2rem; text-align: left;';
  }};
`;

const RadioWrapper = styled(Radio)``;

const RadioGroupWrapper = styled(RadioGroup)<{
  leftAlignItems?: boolean;
  inline?: boolean;
  compacted?: boolean;
  flexColumns?: boolean;
}>`
  display: ${props =>
    props.inline || props.leftAlignItems ? 'flex' : 'block'};
  ${props => {
    if (props.inline) {
      if (props.flexColumns) return 'flex-direction: column !important;';
      return 'flex-direction: row !important;';
    }
  }} > label {
    margin: 0;
  }
  ${props => {
    if (props.compacted) {
      return `margin-left: 10px; width: 500px;`;
    }
  }}
`;

export {
  Wrap,
  RadioWrapper,
  RadioGroupWrapper,
  FormLabelWrapper,
  FormControlLabelWrapper,
};
