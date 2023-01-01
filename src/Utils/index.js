import moment from 'moment-timezone';
import {
  truncate as lodashTruncate,
  invert,
  lowerCase,
  startCase,
  pick,
} from 'lodash';
import queryString from 'query-string';
import useSessionStorage from './useSessionStorage';
import useLocalStorage from './useLocalStorage';
import useScreenSize from './useScreenSize';

import { USER_TYPES } from '../constants';
export * from './types';
export * from './index-v2';

const compose = (...fns) => x => fns.reduceRight((y, f) => f(y), x);

const formatByteSize = fileByteSize => {
  return fileByteSize / 1000000;
};

const timeAgo = (date, { parseFormat, suffix } = {}) => {
  if (!date) return '-';
  const parse = parseFormat || 'ddd MMM DD YYYY HH:mm:ss Z';
  const suff = suffix || 'ago';
  const m = moment(date, parse);
  const today = moment();
  const diff = m.diff(today);

  if (m.isValid() && diff <= 0) {
    return `${m.toNow(true)}${suff ? ` ${suff}` : ''}`;
  }
  if (m.isValid() && diff > 0) {
    return m.from(today);
  }

  return null;
};

const truncate = (string, options) => lodashTruncate(string, options);

// This function converts URI parameters into an object
// e.g. ?email=7d6343b418c700f6d6dc677d168c57ce&id=10&token=tok12345&action=NO
// becomes { email: "d6343b418c700f6d6dc677d168c57ce", id: 10, token: "tok12345", action: "NO" }
const getURIParameters = urlsearch => {
  return !urlsearch
    ? {}
    : urlsearch
        .replace('?', '')
        .split('&')
        .reduce(function (acc, item) {
          const kp = item.split('=');
          acc[kp[0]] = kp[1];
          return acc;
        }, {});
};

// format number grouping the last 6 digit by 3
const formatPhone = number => {
  if (!number) return '';

  const cleanedUp = number.trim().replace(/\s+/g, '');
  const len = cleanedUp.length;
  if (len < 6) return cleanedUp;

  return [
    cleanedUp.substring(0, len - 6),
    cleanedUp.substring(len - 6, len - 3),
    cleanedUp.substring(len - 3),
  ].join(' ');
};

const isAdmin = user => {
  const {
    role: { code },
  } = user || { role: {} };
  return code === USER_TYPES.ADMIN;
};

const fullUserType = userType => invert(USER_TYPES)[userType];
const readableUserTypes = compose(startCase, lowerCase, fullUserType);

const parseQueryString = (queryStringParam = '', interestedKeys) => {
  const parsed = queryString.parse(queryStringParam);
  if (interestedKeys) {
    return pick(parsed, Object.keys(interestedKeys));
  }
  return parsed;
};

export {
  compose,
  timeAgo,
  truncate,
  getURIParameters,
  formatPhone,
  isAdmin,
  readableUserTypes,
  formatByteSize,
  parseQueryString,
  useSessionStorage,
  useLocalStorage,
  useScreenSize,
};
