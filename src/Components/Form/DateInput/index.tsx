import React, { useState, useCallback } from 'react';
import {
  FieldLabel,
  FieldRequired,
  DateInputWrapper,
  DateAndTimeInputWrapper,
} from './styles';
import moment, { Moment } from 'moment';

function getDateFromPreviousValue(date: Date | Moment | string): Date {
  return moment(date).toDate();
}

function DateInput({
  value,
  label,
  required = false,
  enable_time = false,
  error,
  name,
  minDate,
  onChange,
}: {
  value: Maybe<string | Date | Moment>;
  label?: string;
  required?: boolean;
  enable_time?: boolean;
  error?: string;
  name?: string;
  minDate?: Date;
  onChange: (newDate: Date) => void;
}) {
  const [date, setDate] = useState<Date | undefined>(() =>
    value && value !== 'Not Provided'
      ? getDateFromPreviousValue(value)
      : undefined
  );

  const handleOnChangeDate = useCallback(
    (dateArgument: Date | Date[]) => {
      const newDate = Array.isArray(dateArgument)
        ? dateArgument[0]
        : dateArgument;
      setDate(newDate);
      onChange(newDate);
    },
    [onChange]
  );

  return (
    <div>
      {label && <FieldLabel>Certificate Expiry Date</FieldLabel>}
      {required && <FieldRequired>*</FieldRequired>}
      {enable_time && (
        <DateAndTimeInputWrapper
          onChange={handleOnChangeDate}
          error={error}
          value={date}
          locale="en-AU"
        />
      )}
      {!enable_time && (
        <DateInputWrapper
          minDate={minDate}
          onChange={handleOnChangeDate}
          error={error}
          name={name}
          value={date}
          locale="en-AU"
        />
      )}
    </div>
  );
}

export default DateInput;
