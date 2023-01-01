import styled from 'styled-components';
import { TextField } from '@material-ui/core';

const Field = styled(TextField)`
  margin-bottom: ${props => (props.error ? '40px' : '14px')};
  background: ${props => props.theme.colors.alabaster};
  width: 100%;
  min-height: 107px;
  height: ${props => (props.fullHeight ? '100%' : '150px')};
  padding-left: 12px !important;
  padding-top: 12px !important;
  border-radius: 3px;
  ${props => {
    if (props.inputProps.overflowX) {
      return `
        overflow-x: hidden;
      `;
    }
  }};
`;

const Label = styled.div`
  padding-bottom: 12px;
`;

export { Field, Label };
