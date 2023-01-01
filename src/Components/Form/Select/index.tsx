import React from 'react';
import { Component, Wrapper } from './styles';
import { SelectProps } from '@material-ui/core';

const humanizeJoinList = (list: unknown[]): string => {
  switch (list.length) {
    case 0:
      return 'None';
    case 1:
      return (list[0] as string)?.toString();
    default:
      return `${list.slice(0, list.length - 1).join(', ')} and ${
        list[list.length - 1]
      }`;
  }
};

type Option = { value: unknown; label: string };

const Select = ({
  enableDefaultOption = false,
  defaultOptionText = 'Select a value',
  defaultOptionValue = '',
  multiple = false,
  ...props
}: {
  enableDefaultOption?: boolean;
  disabled?: boolean;
  defaultOptionText?: string;
  defaultOptionValue?: string;
  multiple?: boolean;
  error?: string;
  grow?: boolean;
  options: Option[];
  name?: string;
} & Pick<SelectProps, 'value' | 'onChange'>) => {
  const renderValue = (selected: Option[]) => {
    if (multiple) {
      return humanizeJoinList(
        selected.map(({ value, label }) => label || value)
      );
    }

    const selectedOption = props.options.find(
      ({ value }) => `${value}` === `${selected}`
    );
    return selectedOption?.label ?? '';
  };

  return (
    <Component disabled={props.disabled} error={props.error} grow={props.grow}>
      <Wrapper
        renderValue={renderValue as (value: unknown) => React.ReactNode}
        disabled={props.disabled}
        onChange={props.onChange}
        value={props.value}
        name={props.name}
      >
        {/* {enableDefaultOption && (
          <Item key={defaultOptionValue} value={defaultOptionValue}>
            {defaultOptionText}
          </Item>
        )}
        {props.options &&
          props.options.map(option => (
            <Item key={option.value as string} value={option.value as string}>
              {option.label ?? option.value ?? ''}
            </Item>
          ))} */}
      </Wrapper>
    </Component>
  );
};

export default Select;
