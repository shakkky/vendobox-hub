import styled from 'styled-components';
import { Input, InputProps } from '@material-ui/core';
import TextFieldBYB from '../../TextField';

type FieldProps = {
  marginBottom?: string;
  border?: string;
  error?: boolean;
  errorMessage?: string;
} & InputProps;

export const Field = styled(Input)<FieldProps>`
  margin-bottom: ${props =>
    props.error ? '40px' : props.marginBottom ?? '14px'};
  background: ${props => props.theme.colors.alabaster};
  width: 100%;
  border: 1px solid
    ${({ error = false, theme, border }) =>
      error ? theme.colors.thunderbird : border ?? 'transparent'} !important;
  height: 52px;

  & > div > svg {
    width: 88px;
    margin-left: -14px;
    color: ${props =>
      props.error
        ? props.theme.colors.thunderbird
        : props.theme.colors.persian} !important;
  }

  & > input {
    margin-left: ${props =>
      props.startAdornment ? '-26px' : '15px'} !important;
    font-size: ${props =>
      props.type === 'password' ? '22px !important' : 'inherit'};
    padding-top: ${props => (props.type === 'password' ? '0 ' : '10px')};
  }
  & > input[type='number'],
  & > input[type='email'] {
    padding: 16px 0;
  }
  border-radius: 4px;
  & > input::placeholder {
    font-size: 15px;
  }
  &::after {
    content: '${props => (props.error ? props.errorMessage : '')}';
    position: absolute;
    top: 55px;
    left: 0;
    color: ${props => props.theme.colors.thunderbird};
    font-size: 15px;
  }
  & input[type='password'] {
    /* height: unset !important; */
    &::placeholder {
      line-height: 33px;
    }
  }
`;

export const TextField = styled(TextFieldBYB)`
  input[type='search']::-webkit-search-cancel-button {
    display: none;
  }
`;

export const Skeleton = styled.div`
  min-height: 50px;
  height: 100%;
  margin-bottom: 13px;
`;
