import React, { useMemo } from 'react';

import Select, {
  ClearIndicatorProps,
  components,
  DropdownIndicatorProps,
  InputProps,
  SelectComponentsConfig,
  SingleValueProps,
  StylesConfig,
} from 'react-select';
import SelectType from 'react-select/dist/declarations/src/Select';
import AsyncSelect, { AsyncProps } from 'react-select/async';

import styled, { css } from 'styled-components';
import { Input as InputMui } from '@material-ui/core';
import {
  ArrowDropDown as DropdownIcon,
  Close as ClearIcon,
} from '@material-ui/icons';
import colors from 'styles/colors';
import variables from 'styles/variables';

import { Container } from './styles';

import { CSSProperties } from '@material-ui/core/styles/withStyles';
import { StateManagerProps } from 'react-select/dist/declarations/src/useStateManager';

type Variant = 'outlined' | 'filled' | 'standard';
type Option = { label: string; value: string };

const styles = <IsMulti extends boolean = false>({
  textAlign,
  maxHeight = 300,
  width,
  variant,
  error,
}: {
  textAlign?: CSSProperties['textAlign'];
  width?: number;
  maxHeight?: number;
  variant?: Variant;
  error?: boolean;
}): StylesConfig<Option, IsMulti, never> => ({
  control: provided => ({
    ...provided,
    boxShadow: 'none',
    zIndex: 1,
    backgroundColor: variant !== 'filled' ? colors.alabaster : undefined,
    borderColor: colors.alabaster,
    '&:hover': {
      backgroundColor: variant !== 'filled' ? colors.alabaster : undefined,
    },
    width,
    border: error ? `1px solid ${colors.thunderbird}` : undefined,
  }),
  option: (provided, { isFocused }: { isFocused: boolean }) => ({
    ...provided,
    color: 'black',
    textAlign,
    backgroundColor:
      variant !== 'filled' && isFocused ? colors.alabaster : undefined,
    '&:hover': {
      backgroundColor: variant !== 'filled' ? colors.alabaster : undefined,
    },
    zIndex: 11,
  }),
  multiValueLabel: provided => ({
    ...provided,
    color: 'black',
  }),
  singleValue: provided => ({
    ...provided,
    zIndex: 3,
    color: 'black',
    marginLeft: 0,
    bottom: 7,
    position: 'absolute',
  }),
  input: (provided, { isMulti }: { isMulti: boolean }) => ({
    ...provided,
    fontSize: isMulti ? '16px' : '14px',
  }),
  noOptionsMessage: provided => ({
    ...provided,
    fontFamily: variables.fonts.medium,
  }),
  placeholder: provided => ({
    ...provided,
    zIndex: 2,
    bottom: 7,
    position: 'absolute',
  }),
  menu: provided => ({
    ...provided,
    zIndex: 10,
  }),
  menuList: provided => ({
    ...provided,
    maxHeight: `${maxHeight}px`,
  }),
  valueContainer: provided => ({
    ...provided,
    ...(variant === 'outlined' ? { paddingLeft: 0 } : {}),
    ...(variant === 'filled' ? { paddingLeft: 0, top: 10 } : {}),
  }),
});

const Input = styled(InputMui)<{ variant: Variant }>`
  background: ${({ variant }) => variant !== 'filled' && colors.alabaster};
  ${({ variant }) =>
    variant === 'filled' &&
    css`
      padding-top: 6px;
    `}
`;

const IconStyle = styled.div`
  padding: 8px;
  cursor: pointer;
`;

const StyledDropdownIcon = <IsMulti extends boolean = false>({
  innerProps,
}: DropdownIndicatorProps<Option, IsMulti, never>) => (
  <IconStyle {...(innerProps as Record<string, unknown>)}>
    <DropdownIcon />
  </IconStyle>
);

const StyledClearIndicator = <IsMulti extends boolean = false>({
  innerProps,
}: ClearIndicatorProps<Option, IsMulti, never>) => (
  <IconStyle {...(innerProps as Record<string, unknown>)}>
    <ClearIcon />
  </IconStyle>
);

const SingleValue = <IsMulti extends boolean = false>({
  children,
  innerProps,
  ...props
}: SingleValueProps<Option, IsMulti, never>) => (
  <components.SingleValue
    {...props}
    innerProps={{
      ...innerProps,
    }}
  >
    {children}
  </components.SingleValue>
);

function InputComponent<IsMulti extends boolean = false>({
  innerRef,
  value,
  id,
  ...props
}: InputProps<Option, IsMulti, never> & {
  selectProps: {
    variant: 'filled' | 'outlined' | 'standard';
    label: string;
    TextFieldProps?: { error?: boolean };
  };
}) {
  const {
    selectProps: { variant, label, TextFieldProps },
  } = props;
  const { error } = TextFieldProps ?? {};
  return (
    <Input
      variant={variant}
      disableUnderline
      fullWidth
      aria-label={label}
      inputRef={innerRef}
      value={value}
      {...((props as unknown) as Record<string, unknown>)}
      error={error}
    />
  );
}

type DropdownProps<
  Async extends boolean = false,
  IsMulti extends boolean = false
> = {
  async?: Async;
  disabled?: boolean;
  error?: boolean;
  errorMessage?: string;
  helperText?: string;
  id?: string;
  isMulti?: IsMulti;
  label?: string;
  name?: string;
  loading?: boolean;
  margin?: 'none' | 'dense' | 'normal';
  maxHeight?: number;
  fullWidth?: boolean;
  onMenuClose?: () => void;
  placeholder?: string | boolean;
  required?: boolean;
  shrink?: boolean;
  startAdornment?: React.ReactNode;
  textAlign?: CSSProperties['textAlign'];
  value?: Option;
  variant?: Variant;
  width?: number;
} & Pick<
  AsyncProps<Option, IsMulti, never>,
  'loadOptions' | 'cacheOptions' | 'defaultOptions'
> &
  Pick<
    StateManagerProps<Option, IsMulti, never>,
    | 'onChange'
    | 'noOptionsMessage'
    | 'inputValue'
    | 'defaultValue'
    | 'onInputChange'
    | 'options'
    | 'placeholder'
    | 'isClearable'
    | 'isSearchable'
    | 'closeMenuOnSelect'
  > &
  Pick<SelectComponentsConfig<Option, IsMulti, never>, 'Option'>;

type ExtraProps = Pick<
  DropdownProps,
  'cacheOptions' | 'loadOptions' | 'defaultOptions'
>;

function Dropdown<
  Async extends boolean = false,
  IsMulti extends boolean = false
>(
  {
    async,
    cacheOptions,
    closeMenuOnSelect,
    defaultOptions,
    defaultValue,
    disabled,
    error = false,
    errorMessage,
    helperText,
    id,
    inputValue,
    isClearable,
    isMulti,
    isSearchable,
    label,
    loading,
    loadOptions,
    margin,
    maxHeight,
    noOptionsMessage,
    onChange,
    onInputChange,
    onMenuClose,
    Option,
    options,
    placeholder,
    required,
    startAdornment,
    textAlign,
    value,
    variant,
    width,
    ...props
  }: DropdownProps<Async, IsMulti>,
  ref: React.Ref<SelectType<Option, IsMulti, never>>
) {
  type Components = SelectComponentsConfig<Option, IsMulti, never>;
  const themedStyles = useMemo(
    () => styles<IsMulti>({ textAlign, maxHeight, variant, width, error }),
    [textAlign, maxHeight, variant, width, error]
  );
  let Component = Select;
  let extraProps: ExtraProps = {};
  const extraComponents: Partial<Components> = {};
  if (async) {
    Component = AsyncSelect;
    extraProps = {
      loadOptions,
      cacheOptions,
      defaultOptions,
    };
  }

  if (Option) {
    extraComponents['Option'] = Option;
  }
  const shrink = props.shrink;
  return (
    <Container {...props}>
      <Component<Option, IsMulti, never>
        closeMenuOnSelect={closeMenuOnSelect}
        onMenuClose={onMenuClose}
        options={options}
        isMulti={isMulti}
        value={value}
        inputValue={inputValue}
        onInputChange={onInputChange}
        defaultValue={defaultValue}
        isSearchable={isSearchable}
        isClearable={isClearable}
        isDisabled={disabled}
        isLoading={loading}
        styles={themedStyles}
        inputId={id}
        onChange={onChange}
        noOptionsMessage={noOptionsMessage}
        placeholder={placeholder}
        ref={ref}
        components={{
          // Input: variant === 'filled' ? components.Input : InputComponent,
          Input: InputComponent as Components['Input'],
          DropdownIndicator: StyledDropdownIcon,
          IndicatorSeparator: null,
          ClearIndicator: StyledClearIndicator,
          SingleValue: SingleValue,
          ...extraComponents,
        }}
        {...{
          required,
          variant,
          startAdornment,
          TextFieldProps: {
            id,
            margin,
            variant,
            label,
            required,
            startAdornment,
            helperText:
              errorMessage?.trim() !== ''
                ? errorMessage ?? helperText
                : helperText,
            error,
            // InputLabelProps: {
            //   htmlFor: id,
            // },
            InputLabelProps: { shrink },
          },
        }}
        {...extraProps}
      />
    </Container>
  );
}

Dropdown.propTypes = {};

Dropdown.defaultValue = {
  disabled: false,
  loading: false,
  noOptionsMessage: null,
  placeholder: null,
  isMulti: false,
  isClearable: true,
  isSearchable: true,
  async: false,
  closeMenuOnSelect: true,
  onMenuClose: () => undefined,
};

declare module 'react' {
  function forwardRef<
    Async extends boolean = false,
    IsMulti extends boolean = false
  >(
    render: (
      props: DropdownProps<Async, IsMulti>,
      ref: React.Ref<SelectType<Option, IsMulti, never>>
    ) => React.ReactElement | null
  ): (
    props: DropdownProps<Async, IsMulti> &
      React.RefAttributes<SelectType<Option, IsMulti, never>>
  ) => React.ReactElement | null;
}

export default React.forwardRef(Dropdown);
