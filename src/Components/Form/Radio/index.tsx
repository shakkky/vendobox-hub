import { RadioGroupProps } from '@material-ui/core';
import React from 'react';

import {
  Wrap,
  RadioGroupWrapper,
  RadioWrapper,
  FormLabelWrapper,
  FormControlLabelWrapper,
} from './styles';

const Radio = ({
  label,
  value,
  onChange,
  options,
  disabled,
  inline,
  centered,
  compacted,
  leftAlignItems,
  flexColumns,
}: {
  label?: string;
  value?: string | null;
  options: { label: string; value: string | null }[];
  onChange?: RadioGroupProps['onChange'];

  inline?: boolean;
  disabled?: boolean;
  centered?: boolean;
  compacted?: boolean;
  leftAlignItems?: boolean;
  flexColumns?: boolean;
}) => {
  return (
    <Wrap inline={inline} centered={centered}>
      {label && (
        <FormLabelWrapper
          inline={inline}
          component="legend"
          compacted={compacted}
        >
          {label}
        </FormLabelWrapper>
      )}
      <RadioGroupWrapper
        name="type"
        inline={inline}
        value={value}
        onChange={onChange}
        compacted={compacted}
        leftAlignItems={leftAlignItems}
        flexColumns={flexColumns}
      >
        {options.map(item => {
          return (
            <FormControlLabelWrapper
              key={item.value}
              inline={inline}
              value={item.value}
              control={<RadioWrapper color="primary" disabled={disabled} />}
              label={item.label}
            />
          );
        })}
      </RadioGroupWrapper>
    </Wrap>
  );
};

export default Radio;
