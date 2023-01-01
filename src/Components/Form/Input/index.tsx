import React from 'react';
import { TextFieldProps, InputProps } from '@material-ui/core';

import { Field, TextField } from './styles';

const FieldWithVariant = ({
  variant,
  ...props
}: {
  variant?: string;
  name?: string;
  errorMessage?: string;
  disableUnderline?: boolean;
  endAdornment?: React.ReactNode;
  startAdornment?: React.ReactNode;
  readOnly?: boolean;
  border?: string;
  marginBottom?: string;
  disabled?: boolean;
} & TextFieldProps) => {
  switch (variant) {
    case 'outlined':
    case 'filled': {
      const { endAdornment, startAdornment, InputProps = {} } = props;
      return (
        <TextField
          variant={variant}
          fullWidth
          InputProps={{
            ...InputProps,
            endAdornment,
            startAdornment,
          }}
          {...props}
        />
      );
    }
    case 'standard':
    default:
      return (
        <Field
          {...(props as InputProps)}
          error={props.error}
          errorMessage={props.errorMessage}
        />
      );
  }
};

const Input = ({
  loading = false,
  name,
  ...props
}: {
  loading?: boolean;
  name?: string;
  type?: string;
  readOnly?: boolean;
  border?: string;
  error?: boolean;
  endAdornment?: React.ReactNode;
  startAdornment?: React.ReactNode;
  errorMessage?: string;
  marginBottom?: string;
  disabled?: boolean;
} & TextFieldProps): JSX.Element => {
  // if (loading) {
  //   return <Skeleton height={52} />;
  // }
  return <FieldWithVariant disableUnderline name={name} {...props} />;
};

export { Input };
export default Input;
