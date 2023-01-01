import React from 'react';
import { Label, Wrapper, RequiredMark } from './styles';

const SectionFormInput = ({
  label,
  width,
  children,
  required = false,
  isCheckbox = false,
  disabled = false,
}: {
  width?: number;
  label?: string;
  required?: boolean;
  isCheckbox?: boolean;
  children: React.ReactNode;
  disabled?: boolean;
}) => (
  <Wrapper width={width} className="section-form-input" isCheckbox={isCheckbox}>
    {label && (
      <Label disabled={disabled}>
        {label}
        {required && <RequiredMark> *</RequiredMark>}
      </Label>
    )}
    {isCheckbox && !label && <Label />}
    {children}
  </Wrapper>
);

export default SectionFormInput;
