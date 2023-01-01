import { TextField as TextFieldMui, TextFieldProps } from '@material-ui/core';

export default function TextField({
  error,
  errorMessage,
  fullWidth,
  helperText,
  id,
  label,
  maxLength,
  name,
  onChange,
  placeholder,
  required,
  value,
  variant = 'filled',
  ...props
}: {
  /**
   * This field is for an error message underneath the component
   */
  errorMessage?: Maybe<string>;
  /**
   * The maximum length of the content in the text field
   */
  maxLength?: number;
} & Pick<
  TextFieldProps,
  | 'disabled'
  | 'error'
  | 'fullWidth'
  | 'helperText'
  | 'id'
  | 'label'
  | 'InputLabelProps'
  | 'name'
  | 'onChange'
  | 'onBlur'
  | 'placeholder'
  | 'required'
  | 'value'
  | 'variant'
>) {
  return (
    <TextFieldMui
      error={error}
      fullWidth={fullWidth}
      helperText={errorMessage ?? helperText}
      id={id}
      label={label}
      name={name}
      onChange={onChange}
      // placeholder={placeholder}
      required={required}
      value={value}
      variant={variant}
      inputProps={{
        maxLength,
        name,
      }}
      {...props}
    />
  );
}
