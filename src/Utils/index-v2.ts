import 'moment-timezone';
import moment from 'moment';
import { useRef, useEffect } from 'react';

export const validateMutationFields = <T extends Record<string, unknown>>(
  requiredValidations: { name: keyof T; message: string }[],
  fields: T
) => {
  const validationResult = requiredValidations.reduce(
    (obj, { name, message }) => {
      if (!fields[name] || String(fields[name]).trim() === '') {
        obj[name] = {
          error: true,
          errorMessage: message,
        };
      } else {
        obj[name] = { error: false, errorMessage: '' };
      }
      return obj;
    },
    {} as Record<keyof T, { error: boolean; errorMessage: string }>
  );
  const isValid = Object.values(validationResult).some(
    validation => validation.error
  );
  return { validationResult, isValid };
};

export function usePrevious<T>(val: T) {
  const ref = useRef<T>(val);
  useEffect(() => {
    ref.current = val;
  }, [val]);
  return ref.current;
}

export const formatDate = (
  date: Maybe<Date | string | moment.Moment>,
  args?: {
    format?: string;
    parseFormat?: string;
    timezone?: string;
    fallbackDate?: string;
  }
) => {
  const { format, parseFormat, timezone, fallbackDate = 'Not Provided' } =
    args ?? {};
  if (!date) return fallbackDate;

  const parse = parseFormat ?? 'ddd MMM DD YYYY HH:mm:ss Z';
  const fmt = format ?? 'DD/MM/YYYY';

  if (timezone) {
    let momentDate = moment(date, parse);
    if (momentDate.toString() === 'Invalid date') {
      momentDate = moment(date);
    }
    return momentDate.tz(timezone).format(fmt);
  }
  let momentDate = moment.utc(date, parse);
  if (momentDate.toString() === 'Invalid date') {
    momentDate = moment.utc(date);
  }
  return momentDate.local().format(fmt);
};

export const parseDate = (
  date: Date | string | moment.Moment,
  args: {
    timezone?: string;
    parseFormat?: string;
  }
) => {
  const { parseFormat, timezone } = args ?? {};
  if (!date) return null;

  const parse = parseFormat ?? 'ddd MMM DD YYYY HH:mm:ss Z';

  if (timezone) {
    return moment(date, parse).tz(timezone);
  }

  return moment(date, parse).local();
};

export const formatNoteDateTime = (
  date: Date | string | moment.Moment,
  args: {
    format?: string;
    parseFormat?: string;
    timezone?: string;
  }
) => {
  const { format, parseFormat, timezone } = args ?? {};
  if (!date) return 'Not Provided';

  const parse = parseFormat ?? 'ddd MMM DD YYYY HH:mm:ss Z';
  const fmt = format ?? 'DD-MM-YYYY hh:mma';

  if (timezone) {
    return moment(date, parse).tz(timezone).format(fmt);
  }

  return moment.utc(date, parse).local().format(fmt);
};
